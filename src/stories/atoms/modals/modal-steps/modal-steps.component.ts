import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  WritableSignal,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalBaseComponent } from '../modal-base/modal-base.component';
import { ModalStepsInputs } from './modal-base.component.types';
import { ModalBaseOutputs } from '../modal-base/modal-base.component.types';

@Component({
  selector: 'app-modal-steps',
  standalone: true,
  imports: [CommonModule, ModalBaseComponent],
  templateUrl: './modal-steps.component.html',
  styleUrls: [],
})
export class ModalStepsComponent {
  @Input({ required: true }) open!: ModalStepsInputs['open'];
  @Output() onClose: ModalBaseOutputs['onClose'] = new EventEmitter<boolean>();

  @Input({ required: true }) title!: ModalStepsInputs['title'];
  @Input() descriptions?: ModalStepsInputs['descriptions'];

  @Input({ required: true }) currentStep!: ModalStepsInputs['currentStep'];
  @Input() steps!: ModalStepsInputs['steps'];

  @Input() confirmBtns?: ModalStepsInputs['confirmBtns'];
  @Output() onConfirm: ModalBaseOutputs['onConfirm'] = new EventEmitter<void>();

  @Input() cancelBtns?: ModalStepsInputs['cancelBtns'];
  @Output() onCancel: ModalBaseOutputs['onCancel'] = new EventEmitter<void>();

  handleConfirm() {
    if (this.currentStep() === this.steps.length) {
      this.onConfirm.emit();
      return;
    }
    this.currentStep.update((value) => value + 1);
  }

  handleCancel() {
    if (this.currentStep() === 0) {
      this.onCancel.emit();
      return;
    }
    this.currentStep.update((value) => value - 1);
  }
}
