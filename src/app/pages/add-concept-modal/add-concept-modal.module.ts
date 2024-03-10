import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalStepsComponent } from '@stories/atoms/modals/modal-steps/modal-steps.component';
import { AddConceptBaseModalComponent } from './components/add-concept-base-modal/add-concept-base-modal.component';

@NgModule({
  declarations: [AddConceptBaseModalComponent],
  imports: [CommonModule, ModalStepsComponent],
  exports: [AddConceptBaseModalComponent],
})
export class AddConceptModalModule {}
