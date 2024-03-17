import { Component, OnInit, signal } from '@angular/core';
import { GlobalPositionInterfaceService } from '../data/repository/global-position-interface.service';
import { GlobalPositionStoreService } from './store/global-position-store.service';
import DateTimeService from '@app/utils/Datetime/DatetimeService';
import { DATE_FORMATS } from '@app/utils/Datetime/constants';
import { toObservable } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-global-postion-page',
  templateUrl: './global-postion-page.component.html',
  styleUrls: ['./global-postion-page.component.scss'],
})
export class GlobalPostionPageComponent implements OnInit {
  openIncome = signal(false);
  openExpense = signal(false);

  constructor(
    private globalPostionService: GlobalPositionInterfaceService,
    private globalPositionStore: GlobalPositionStoreService
  ) {}

  dataRange$ = toObservable(this.globalPositionStore.dataRange);

  ngOnInit(): void {
    this.dataRange$.subscribe(() => {
      this.fetchAccountByYear();
    });
  }

  private fetchAccountByYear() {
    const dateEnd = this.globalPositionStore.dataRange().dateEnd;
    const year = DateTimeService.parse(dateEnd, DATE_FORMATS.Year);

    this.globalPostionService
      .summary({
        year,
      })
      .then((resul: any) => {
        console.log(resul);
      })
      .catch((error: any) => {
        console.log({ error });
      });
  }
}
