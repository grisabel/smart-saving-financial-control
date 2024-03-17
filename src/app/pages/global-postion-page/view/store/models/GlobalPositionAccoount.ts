import { DateTimeModel } from '@app/utils/Datetime/DatetimeInterfaceService';

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
