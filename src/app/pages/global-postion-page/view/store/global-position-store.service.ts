import { Injectable } from '@angular/core';
import {
  DataRage,
  GlobalPositionAccount,
  GlobalPositionStoreInterfaceService,
} from './global-position-store-interface.service';
import { BehaviorSubject, Observable } from 'rxjs';

import { DateTimeModel } from '@app/utils/Datetime/DatetimeInterfaceService';
import DateTimeService from '@app/utils/Datetime/DatetimeService';

@Injectable({
  providedIn: 'root',
})
export class GlobalPositionStoreService
  implements GlobalPositionStoreInterfaceService
{
  DATE_MAX: DateTimeModel = DateTimeService.currentDate();

  private dataRange = new BehaviorSubject<DataRage | null>(null);
  public dataRange$ = this.dataRange.asObservable();

  _setDataRange(value: DataRage): void {
    this.dataRange.next(value);
  }

  private account = new BehaviorSubject<GlobalPositionAccount | null>(null);
  public account$ = this.account.asObservable();

  _setAccount(value: GlobalPositionAccount): void {
    this.account.next(value);
  }
}
