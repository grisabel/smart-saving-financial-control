import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddConceptModalComponent } from './add-concept-modal.component';
import { ModalStepsComponent } from '@stories/atoms/modals/modal-steps/modal-steps.component';

@NgModule({
  declarations: [AddConceptModalComponent],
  imports: [CommonModule, ModalStepsComponent],
  exports: [AddConceptModalComponent],
})
export class AddConceptModalModule {}
