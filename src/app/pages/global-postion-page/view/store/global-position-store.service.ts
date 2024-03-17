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

  dataRange = signal<DataRage | null>(null);

  account = signal<GlobalPositionAccount | null>(null);
}
