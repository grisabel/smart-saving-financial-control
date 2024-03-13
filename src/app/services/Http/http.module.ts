import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

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
      useClass: false ? HttpService : HttpMockAdapterService,
    },
  ],
})
export class HttpModule {}
