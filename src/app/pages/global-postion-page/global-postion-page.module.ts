import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';

import { GlobalPostionPageRoutingModule } from './global-postion-page-routing.module';
import { GlobalPostionPageComponent } from './global-postion-page.component';

import { AddConceptModalModule } from '../../pages/add-concept-modal/add-concept-modal.module';
import { UiBasicModule } from '../../../stories/ui-basic.module';
import { HttpModule } from '@app/services/Http/http.module';
import { GlobalPositionInterfaceService } from './repository/global-position-interface.service';
import { GlobalPositionHttpService } from './repository/global-position-http.service';
import { GlobalPositionMockService } from './repository/global-position-mock.service';

@NgModule({
  declarations: [GlobalPostionPageComponent],
  imports: [
    CommonModule,
    GlobalPostionPageRoutingModule,
    // HttpModule
    HttpModule,
    // UI Modules
    UiBasicModule,
    // Feature Modules
    AddConceptModalModule,
  ],
  providers: [
    {
      provide: GlobalPositionInterfaceService,
      useClass: !environment.mock
        ? GlobalPositionHttpService
        : GlobalPositionMockService,
    },
  ],
})
export class GlobalPostionPageModule {}
