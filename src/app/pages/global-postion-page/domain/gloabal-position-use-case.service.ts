import { Injectable, inject } from '@angular/core';
import { GPSummaryRequestModel } from '../data/repository/model/request/GPSummaryRequestModel';
import { GlobalPositionStoreService } from '../view/store/global-position-store.service';
import { GlobalPositionInterfaceService } from '../data/repository/global-position-interface.service';
import { GPSummaryResponseModel } from '../data/repository/model/response/GPSummaryResponseModel';

interface SummaryParams {
  requestModel: GPSummaryRequestModel;
  view: {
    setLoading: (value: boolean) => void;
  };
}

@Injectable()
export class GloabalPositionUseCaseService {
  constructor(
    private globalPostionService: GlobalPositionInterfaceService,
    private globalPositionStore: GlobalPositionStoreService
  ) {}

  summary({ requestModel, view }: SummaryParams): Promise<void> {
    view.setLoading(true);
    return new Promise((resolve) => {
      this.globalPostionService
        .summary({
          year: requestModel.year,
        })
        .then((resul: GPSummaryResponseModel) => {
          this.globalPositionStore.account.update((value) => {
            const data = structuredClone(value?.data) ?? {};
            data[requestModel.year] = {
              income: (resul.incomes || []).reduce(
                (acc, income) => acc + income.amount,
                0
              ),
              expense: (resul.expenses || []).reduce(
                (acc, expense) => acc + expense.amount,
                0
              ),
            };

            return {
              ...value,
              data,
            };
          });
        })
        .catch((error: any) => {
          console.log({ error });
        })
        .finally(() => {
          view.setLoading(false);
        });
    });
  }
}
