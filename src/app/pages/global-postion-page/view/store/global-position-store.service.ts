import { Injectable, signal } from '@angular/core';

import { DateTimeModel } from '@app/utils/Datetime/DatetimeInterfaceService';
import DateTimeService from '@app/utils/Datetime/DatetimeService';

import { DataRage } from './models/DataRange';
import { GlobalPositionAccount } from './models/GlobalPositionAccoount';

@Injectable({
  providedIn: 'root',
})
export class GlobalPositionStoreService {
  DATE_MAX: DateTimeModel = DateTimeService.currentDate();
  DATE_MIN: DateTimeModel = {
    date: '01/01/2023',
    format: 'dd/MM/yyyy',
  };

  format = signal<'year' | 'month'>('year');
  dataRange = signal<DataRage>(
    DateTimeService.getDateLimits(DateTimeService.currentDate(), this.format())
  );

  account = signal<GlobalPositionAccount | null>(null);
}
