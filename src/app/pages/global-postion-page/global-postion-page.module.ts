import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';

import { ButtonComponent } from '@stories/atoms/buttons/button/button.component';
import { IconComponent } from '@stories/atoms/icon/icon.component';
import { CardBtnComponent } from '@stories/atoms/buttons/card-btn/card-btn.component';
import { BalanceContentComponent } from '@stories/atoms/content/balance-content/balance-content.component';
import { CalendarRangePickerComponent } from '@stories/atoms/inputs/calendar-range-picker/calendar-range-picker.component';

import { AddConceptModalModule } from '@app/pages/add-concept-modal/add-concept-modal.module';

import { GlobalPostionPageRoutingModule } from './view/global-postion-page-routing.module';
import { GlobalPostionPageComponent } from './view/global-postion-page.component';

import { HttpModule } from '@app/services/Http/http.module';
import { GlobalPositionInterfaceService } from './data/repository/global-position-interface.service';
import { GlobalPositionHttpService } from './data/repository/global-position-http.service';
import { GlobalPositionMockService } from './data/repository/global-position-mock.service';
import { AccountCardComponent } from './view/components/account-card/account-card.component';

@NgModule({
  declarations: [GlobalPostionPageComponent, AccountCardComponent],
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
    CalendarRangePickerComponent,
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
