import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalStepsComponent } from '@stories/atoms/modals/modal-steps/modal-steps.component';
import { AddConceptBaseModalComponent } from './components/add-concept-base-modal/add-concept-base-modal.component';
import { AccountStepComponent } from './components/add-concept-base-modal/components/account-step/account-step.component';
import { CategoryStepComponent } from './components/add-concept-base-modal/components/category-step/category-step.component';
import { ConceptStepComponent } from './components/add-concept-base-modal/components/concept-step/concept-step.component';
import { SummaryStepComponent } from './components/add-concept-base-modal/components/summary-step/summary-step.component';

@NgModule({
  declarations: [AddConceptBaseModalComponent, AccountStepComponent, CategoryStepComponent, ConceptStepComponent, SummaryStepComponent],
  imports: [CommonModule, ModalStepsComponent],
  exports: [AddConceptBaseModalComponent],
})
export class AddConceptModalModule {}
