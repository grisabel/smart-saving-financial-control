import { Injectable, inject } from '@angular/core';
import { SessionHttpService } from './session-http.service';
import { HttpMockAdapterService } from '@app/services/Http/http-mock-adapter.service';
import { environment } from 'src/environments/environment';
import { HttpInterfaceService } from '@app/services/Http/http-interface.service';

const { baseUrl, SessionAPI } = environment.endpoints;

@Injectable()
export class SessionMockService extends SessionHttpService {
  httpMock = inject(HttpInterfaceService) as HttpMockAdapterService;

  constructor() {
    super();

    this.httpMock.onPost(baseUrl + SessionAPI.logout, () => {
      return Promise.resolve({
        status: 201,
        response: null,
      });
    });
  }
}
