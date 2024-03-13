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

    this.httpMock.onPost(baseUrl + GlobalPositionAPI.register, () => {
      return Promise.resolve({
        status: 204,
        response: null,
      });
    });
  }
}
