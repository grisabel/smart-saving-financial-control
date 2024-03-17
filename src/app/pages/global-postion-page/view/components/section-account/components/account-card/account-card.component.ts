import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CardBaseComponent } from '@stories/atoms/card/card-base/card-base.component';
import { BalanceConceptComponent } from './balance-concept/balance-concept.component';
import { GlobalPositionStoreService } from '@app/pages/global-postion-page/view/store/global-position-store.service';
import DateTimeService from '@app/utils/Datetime/DatetimeService';
import { DATE_FORMATS } from '@app/utils/Datetime/constants';
import { toObservable } from '@angular/core/rxjs-interop';
import { GlobalPositionAccount } from '@app/pages/global-postion-page/view/store/models/GlobalPositionAccoount';
import { merge } from 'rxjs';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss'],
  standalone: true,
  imports: [CommonModule, CardBaseComponent, BalanceConceptComponent],
})
export class AccountCardComponent {
  @Output() onClick: EventEmitter<void> = new EventEmitter();

  constructor(public globalPositionStore: GlobalPositionStoreService) {}

  expense = signal(0);
  income = signal(0);
  total = signal(0);
  accountName = signal('');
  lastMovement = signal('');

  account$ = toObservable(this.globalPositionStore.account);
  dataRange$ = toObservable(this.globalPositionStore.dataRange);

  ngOnInit(): void {
    merge(...[this.account$, this.dataRange$]).subscribe(() => {
      const account = this.globalPositionStore.account();
      const dateEnd = this.globalPositionStore.dataRange().dateEnd;
      const year = DateTimeService.parse(dateEnd, DATE_FORMATS.Year);

      this.accountName.set(account.accountName);
      this.lastMovement.set(DateTimeService.parse(dateEnd, DATE_FORMATS.Date));
      this.calculateExpense(account, year);
      this.calculateIncome(account, year);
      this.calculateTotal(account, year);
    });
  }

  handleClick() {
    this.onClick.emit();
  }

  calculateExpense(account: GlobalPositionAccount, year: string) {
    this.expense.set(account?.data?.[year]?.expense ?? 0);
  }

  calculateIncome(account: GlobalPositionAccount, year: string) {
    this.income.set(account?.data?.[year]?.income ?? 0);
  }

  calculateTotal(account: GlobalPositionAccount, year: string) {
    const income = account?.data?.[year]?.income ?? 0;
    const expense = account?.data?.[year]?.expense ?? 0;

    this.total.set(income - expense);
  }
}
