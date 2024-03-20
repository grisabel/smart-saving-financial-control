import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalStepsComponent } from '@stories/atoms/modals/modal-steps/modal-steps.component';
import { AddConceptBaseModalComponent } from './components/add-concept-base-modal/view/add-concept-base-modal.component';

import { DropdownComponent } from '@stories/atoms/inputs/dropdown/dropdown.component';
import { SelectorCategoryBtnComponent } from '@stories/molecules/selector-category-btn/selector-category-btn.component';
import { InputTextComponent } from '@stories/atoms/inputs/input-text/input-text.component';
import { InputNumberComponent } from '@stories/atoms/inputs/input-number/input-number.component';
import { InputTextDateComponent } from '@stories/atoms/inputs/input-text-date/input-text-date.component';
import { InputTextAreaComponent } from '@stories/atoms/inputs/input-text-area/input-text-area.component';
import { CategoryBtnComponent } from '@stories/atoms/buttons/category-btn/category-btn.component';
import { FinancialControlInterfaceService } from './components/add-concept-base-modal/data/repository/financial-control/financial-control-interface.service';
import { environment } from 'src/environments/environment';
import { FinancialControlMockService } from './components/add-concept-base-modal/data/repository/financial-control/financial-control-mock.service';
import { FinancialControlHttpService } from './components/add-concept-base-modal/data/repository/financial-control/financial-control-http.service';
import { AccountStepComponent } from './components/add-concept-base-modal/view/components/account-step/account-step.component';
import { CategoryStepComponent } from './components/add-concept-base-modal/view/components/category-step/category-step.component';
import { ConceptStepComponent } from './components/add-concept-base-modal/view/components/concept-step/concept-step.component';
import { SummaryStepComponent } from './components/add-concept-base-modal/view/components/summary-step/summary-step.component';
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
