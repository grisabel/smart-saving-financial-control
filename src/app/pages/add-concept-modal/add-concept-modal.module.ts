import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';

import { ModalStepsComponent } from '@stories/atoms/modals/modal-steps/modal-steps.component';

import { DropdownComponent } from '@stories/atoms/inputs/dropdown/dropdown.component';
import { SelectorCategoryBtnComponent } from '@stories/molecules/selector-category-btn/selector-category-btn.component';
import { InputTextComponent } from '@stories/atoms/inputs/input-text/input-text.component';
import { InputNumberComponent } from '@stories/atoms/inputs/input-number/input-number.component';
import { InputTextDateComponent } from '@stories/atoms/inputs/input-text-date/input-text-date.component';
import { InputTextAreaComponent } from '@stories/atoms/inputs/input-text-area/input-text-area.component';
import { CategoryBtnComponent } from '@stories/atoms/buttons/category-btn/category-btn.component';

import { FinancialControlInterfaceService } from './data/repository/financial-control/financial-control-interface.service';
import { FinancialControlHttpService } from './data/repository/financial-control/financial-control-http.service';
import { FinancialControlMockService } from './data/repository/financial-control/financial-control-mock.service';

import { AddConceptBaseModalComponent } from './view/add-concept-base-modal.component';
import { AccountStepComponent } from './view/components/account-step/account-step.component';
import { CategoryStepComponent } from './view/components/category-step/category-step.component';
import { ConceptStepComponent } from './view/components/concept-step/concept-step.component';
import { SummaryStepComponent } from './view/components/summary-step/summary-step.component';
import { HttpModule } from '@app/services/Http/http.module';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [
    AddConceptBaseModalComponent,
    AccountStepComponent,
    CategoryStepComponent,
    ConceptStepComponent,
    SummaryStepComponent,
  ],
  imports: [
    CommonModule,
    ModalStepsComponent,
    DropdownComponent,
    SelectorCategoryBtnComponent,
    InputTextComponent,
    InputNumberComponent,
    InputTextDateComponent,
    InputTextAreaComponent,
    CategoryBtnComponent,
    HttpModule,
    TranslocoModule,
  ],
  exports: [AddConceptBaseModalComponent],
  providers: [
    {
      provide: FinancialControlInterfaceService,
      useClass: !environment.mock
        ? FinancialControlHttpService
        : FinancialControlMockService,
    },
  ],
})
export class AddConceptModalModule {}
