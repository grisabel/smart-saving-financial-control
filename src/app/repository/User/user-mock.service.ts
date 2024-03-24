import { Injectable, inject } from '@angular/core';
import { UserHttpService } from './user-http.service';
import { HttpMockAdapterService } from '@app/services/Http/http-mock-adapter.service';
import { environment } from 'src/environments/environment';
import { HttpInterfaceService } from '@app/services/Http/http-interface.service';

const { baseUrl, UserAPI } = environment.endpoints;

@Injectable()
export class UserMockService extends UserHttpService {
  httpMock = inject(HttpInterfaceService) as HttpMockAdapterService;

  constructor() {
    super();

    this.httpMock.onGet(baseUrl + UserAPI.info, () => {
      return Promise.resolve({
        status: 200,
        response: {
          email: 'isabelchele26@gmail.com',
          firstName: 'Efrén',
          lastName: 'García Sanchez',
          dateBirth: '05/01/2016',
          objective: 'Jubilación',
        },
      });
    });
  }
}
