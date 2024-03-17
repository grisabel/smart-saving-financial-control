import { Injectable } from '@angular/core';
import { DateTimeModel } from '@app/utils/Datetime/DatetimeInterfaceService';
import { Observable } from 'rxjs';

export interface DataRage {
  dateStart: DateTimeModel;
  dateEnd: DateTimeModel;
}

export interface GlobalPositionAccount {
  accountId: string;
  accountName: string;
  lastMovement: DateTimeModel;
  data: {
    [month: string]: {
      income: number;
      expense: number;
    };
  };
}

@Injectable({
  providedIn: 'root',
})
export abstract class GlobalPositionStoreInterfaceService {
  abstract DATE_MAX: DateTimeModel;

  abstract dataRange$: Observable<DataRage | null>;
  abstract _setDataRange(value: DataRage): void;

  abstract account$: Observable<GlobalPositionAccount | null>;
  abstract _setAccount(value: GlobalPositionAccount): void;
}
