import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';

import { GlobalPositionHttpService } from './global-position-http.service';
import { HttpMockAdapterService } from '@app/services/Http/http-mock-adapter.service';
import { HttpInterfaceService } from '@app/services/Http/http-interface.service';

const { baseUrl, GlobalPositionAPI } = environment.endpoints;

@Injectable()
export class GlobalPositionMockService extends GlobalPositionHttpService {
  httpMock = inject(HttpInterfaceService) as HttpMockAdapterService;

  constructor() {
    super();

    this.httpMock.onGet(baseUrl + GlobalPositionAPI.summary, () => {
      return Promise.resolve({
        status: 204,
        response: {
          expenses: [
            {
              date: '01/2024',
              amount: 1528.17,
            },
            {
              date: '02/2024',
              amount: 1635.2,
            },
            {
              date: '03/2024',
              amount: 1380.57,
            },
            {
              date: '04/2024',
              amount: 1801.5,
            },
            {
              date: '05/2024',
              amount: 1488.93,
            },
            {
              date: '06/2024',
              amount: 1653.67,
            },
            {
              date: '07/2024',
              amount: 1533.69,
            },
            {
              date: '08/2024',
              amount: 1521.29,
            },
            {
              date: '09/2024',
              amount: 1428.8,
            },
            {
              date: '10/2024',
              amount: 1484.77,
            },
            {
              date: '11/2024',
              amount: 1878.11,
            },
            {
              date: '12/2024',
              amount: 1343.9,
            },
          ],
          incomes: [
            {
              date: '01/2024',
              amount: 457.13,
            },
            {
              date: '02/2024',
              amount: 406.16,
            },
            {
              date: '03/2024',
              amount: 395.65,
            },
            {
              date: '04/2024',
              amount: 529.22,
            },
            {
              date: '05/2024',
              amount: 351.38,
            },
            {
              date: '06/2024',
              amount: 416.37,
            },
            {
              date: '07/2024',
              amount: 467.63,
            },
            {
              date: '08/2024',
              amount: 413.58,
            },
            {
              date: '09/2024',
              amount: 384.71,
            },
            {
              date: '10/2024',
              amount: 361.3,
            },
            {
              date: '11/2024',
              amount: 325.95,
            },
            {
              date: '12/2024',
              amount: 274.66,
            },
          ],
        },
      });
    });
  }
}
