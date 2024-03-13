import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { HttpInterfaceService } from './http-interface.service';
import { HttpMockAdapterService } from './http-mock-adapter.service';
import { HttpService } from './http.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    HttpMockAdapterService,
    {
      provide: HttpInterfaceService,
      useClass: !environment.mock ? HttpService : HttpMockAdapterService,
    },
  ],
})
export class HttpModule {}
