import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HttpMockAdapterService } from './http-mock-adapter.service';
import { HttpService } from './http.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [HttpMockAdapterService, HttpService],
})
export class HttpModule {}
