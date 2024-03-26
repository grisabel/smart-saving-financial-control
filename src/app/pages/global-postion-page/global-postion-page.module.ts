import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';

import { ButtonComponent } from '@stories/atoms/buttons/button/button.component';
import { IconComponent } from '@stories/atoms/icon/icon.component';
import { CardBtnComponent } from '@stories/atoms/buttons/card-btn/card-btn.component';
import { BalanceContentComponent } from '@stories/atoms/content/balance-content/balance-content.component';
import { CalendarRangePickerComponent } from '@stories/atoms/inputs/calendar-range-picker/calendar-range-picker.component';

import { GlobalPostionPageRoutingModule } from './view/global-postion-page-routing.module';
import { GlobalPostionPageComponent } from './view/global-postion-page.component';

import { GlobalPositionInterfaceService } from './data/repository/global-position-interface.service';
import { GlobalPositionHttpService } from './data/repository/global-position-http.service';
import { GlobalPositionMockService } from './data/repository/global-position-mock.service';
import { SectionSummaryComponent } from './view/components/section-summary/section-summary.component';
import { SectionActionsComponent } from './view/components/section-actions/section-actions.component';
import { SectionAccountComponent } from './view/components/section-account/section-account.component';
import { SectionHabitsComponent } from './view/components/section-habits/section-habits.component';
import { AccountCardComponent } from './view/components/section-account/components/account-card/account-card.component';
import { GloabalPositionUseCaseService } from './domain/gloabal-position-use-case.service';
import { GlobalPositionStoreService } from './view/store/global-position-store.service';
import { AddConceptModalModule } from '../add-concept-modal/add-concept-modal.module';
import { TranslocoModule } from '@ngneat/transloco';
import { WebcomponentMfeComponent } from '@app/components/webcomponent-mfe/webcomponent-mfe.component';

@NgModule({
  declarations: [
    GlobalPostionPageComponent,
    SectionSummaryComponent,
    SectionActionsComponent,
    SectionAccountComponent,
    SectionHabitsComponent,
  ],
  imports: [
    CommonModule,
    GlobalPostionPageRoutingModule,
    // UI Modules
    ButtonComponent,
    IconComponent,
    CardBtnComponent,
    BalanceContentComponent,
    CalendarRangePickerComponent,
    AccountCardComponent,
    TranslocoModule,
    // Feature Modules
    AddConceptModalModule,
    WebcomponentMfeComponent,
  ],
  providers: [
    {
      provide: GlobalPositionInterfaceService,
      useClass: !environment.mock
        ? GlobalPositionHttpService
        : GlobalPositionMockService,
    },
    GloabalPositionUseCaseService,
    GlobalPositionStoreService,
  ],
})
export class GlobalPostionPageModule {}
