import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';

import { GlobalPostionPageRoutingModule } from './global-postion-page-routing.module';
import { GlobalPostionPageComponent } from './global-postion-page.component';

import { AddConceptModalModule } from '../../pages/add-concept-modal/add-concept-modal.module';
import { HttpModule } from '@app/services/Http/http.module';
import { GlobalPositionInterfaceService } from './repository/global-position-interface.service';
import { GlobalPositionHttpService } from './repository/global-position-http.service';
import { GlobalPositionMockService } from './repository/global-position-mock.service';
import { ButtonComponent } from '@stories/atoms/buttons/button/button.component';
import { IconComponent } from '@stories/atoms/icon/icon.component';
import { CardBtnComponent } from '@stories/atoms/buttons/card-btn/card-btn.component';
import { BalanceContentComponent } from '@stories/atoms/content/balance-content/balance-content.component';

@NgModule({
  declarations: [GlobalPostionPageComponent],
  imports: [
    CommonModule,
    GlobalPostionPageRoutingModule,
    // HttpModule
    HttpModule,
    // UI Modules
    ButtonComponent,
    IconComponent,
    CardBtnComponent,
    BalanceContentComponent,
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
