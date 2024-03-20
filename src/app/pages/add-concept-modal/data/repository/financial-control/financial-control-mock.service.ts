import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';

import { FinancialControlHttpService } from './financial-control-http.service';
import { HttpMockAdapterService } from '@app/services/Http/http-mock-adapter.service';
import { HttpInterfaceService } from '@app/services/Http/http-interface.service';

const { baseUrl, FinancialControlAPI } = environment.endpoints;

@Injectable()
export class FinancialControlMockService extends FinancialControlHttpService {
  httpMock = inject(HttpInterfaceService) as HttpMockAdapterService;

  constructor() {
    super();

    this.httpMock.onPost(baseUrl + FinancialControlAPI.addExpense, () => {
      return Promise.resolve({
        status: 200,
        response: null,
      });
    });

    this.httpMock.onPost(baseUrl + FinancialControlAPI.addIncome, () => {
      return Promise.resolve({
        status: 200,
        response: null,
      });
    });
  }
}
