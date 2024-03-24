import { Injectable, signal } from '@angular/core';

import { DateTimeModel } from '@app/utils/Datetime/DatetimeInterfaceService';
import DateTimeService from '@app/utils/Datetime/DatetimeService';

import { DataRage } from './models/DataRange';
import { GlobalPositionAccount } from './models/GlobalPositionAccoount';

@Injectable()
export class GlobalPositionStoreService {
  DATE_MAX: DateTimeModel = DateTimeService.currentDate();
  DATE_MIN: DateTimeModel = {
    date: '01/01/2023',
    format: 'dd/MM/yyyy',
  };

  dataRange = signal<DataRage>({
    dateStart: {
      date: '01/01/2024',
      format: 'dd/MM/yyyy',
    },
    dateEnd: DateTimeService.currentDate(),
  });

  account = signal<GlobalPositionAccount>({
    accountId: '0',
    accountName: 'main-account',
    data: {},
  });
}
