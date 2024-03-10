import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalPostionPageRoutingModule } from './global-postion-page-routing.module';
import { GlobalPostionPageComponent } from './global-postion-page.component';

import { AddConceptModalModule } from '../../pages/add-concept-modal/add-concept-modal.module';
import { UiBasicModule } from '../../../stories/ui-basic.module';

@NgModule({
  declarations: [GlobalPostionPageComponent],
  imports: [
    CommonModule,
    GlobalPostionPageRoutingModule,
    // UI Modules
    UiBasicModule,
    // Feature Modules
    AddConceptModalModule,
  ],
})
export class GlobalPostionPageModule {}
