import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { GLOBAL_APP_ROUTES } from '@app/app-routes';
import DateTimeService from '@app/utils/Datetime/DatetimeService';
import { CalendarRangePickerChangeEvent } from '@stories/atoms/inputs/calendar-range-picker/calendar-range-picker.component';
import { GlobalPositionInterfaceService } from '../data/repository/global-position-interface.service';
import { GlobalPositionStoreService } from './store/global-position-store.service';

@Component({
  selector: 'app-global-postion-page',
  templateUrl: './global-postion-page.component.html',
  styleUrls: ['./global-postion-page.component.scss'],
})
export class GlobalPostionPageComponent implements OnInit {
  openIncome = signal(false);
  openExpense = signal(false);

  constructor(
    private router: Router,
    private globalPostionService: GlobalPositionInterfaceService,
    public globalPositionStore: GlobalPositionStoreService
  ) {}

  ngOnInit(): void {
    this.globalPostionService
      .register({
        dateBirth: '',
        email: '',
        firstName: '',
        lastName: '',
        objetive: '',
        password: '',
        repeatEmail: '',
        repeatPassword: '',
      })
      .then((resul: any) => {
        console.log(resul);
      })
      .catch((error: any) => {
        console.log({ error });
      });
  }

  handlerCategory() {
    this.router.navigate([GLOBAL_APP_ROUTES.categories]);
  }

  format: 'year' | 'month' = 'year';
  range = DateTimeService.getDateLimits(DateTimeService.currentDate(), 'year');
  handleOnChange($event: CalendarRangePickerChangeEvent) {
    this.range = {
      dateStart: $event.dateStart,
      dateEnd: $event.dateEnd,
    };
    this.format = $event.format;
  }

  handlerAccountDetails() {
    this.router.navigate([GLOBAL_APP_ROUTES.accountDetail]);
  }
}
