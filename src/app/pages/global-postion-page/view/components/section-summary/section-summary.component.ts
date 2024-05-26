import { Component, signal } from '@angular/core';
import { GlobalPositionStoreService } from '../../store/global-position-store.service';
import { CalendarRangePickerChangeEvent } from '@stories/atoms/inputs/calendar-range-picker/calendar-range-picker.component';
import { toObservable } from '@angular/core/rxjs-interop';
import { merge } from 'rxjs';
import DateTimeService from '@app/utils/Datetime/DatetimeService';
import { DATE_FORMATS } from '@app/utils/Datetime/constants';
import { GlobalPositionAccount } from '../../store/models/GlobalPositionAccoount';

@Component({
  selector: 'app-section-summary',
  templateUrl: './section-summary.component.html',
  styleUrls: ['./section-summary.component.scss'],
})
export class SectionSummaryComponent {
  constructor(public globalPositionStore: GlobalPositionStoreService) {}

  total = signal(0);

  account$ = toObservable(this.globalPositionStore.account);
  dataRange$ = toObservable(this.globalPositionStore.dataRange);

  ngOnInit(): void {
    merge(...[this.account$, this.dataRange$]).subscribe(() => {
      const account = this.globalPositionStore.account();
      const dateEnd = this.globalPositionStore.dataRange().dateEnd;
      const year = DateTimeService.parse(dateEnd, DATE_FORMATS.Year);

      this.calculateTotal(account, year);
    });
  }

  calculateTotal(account: GlobalPositionAccount, year: string) {
    const income = account?.data?.[year]?.income ?? 0;
    const expense = account?.data?.[year]?.expense ?? 0;

    this.total.set(income - expense);
  }

  handleOnChange($event: CalendarRangePickerChangeEvent) {
    this.globalPositionStore.dataRange.set({
      dateStart: $event.dateStart,
      dateEnd: $event.dateEnd,
    });
  }
}
