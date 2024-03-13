import { Injectable, inject } from '@angular/core';
import { GlobalPositionHttpService } from './global-position-http.service';
import { HttpMockAdapterService } from '@app/services/Http/http-mock-adapter.service';

@Injectable()
export class GlobalPositionMockService extends GlobalPositionHttpService {
  httpMock = inject(HttpMockAdapterService);
}
