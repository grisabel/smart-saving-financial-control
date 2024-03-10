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

@Component({
  selector: 'app-modal-steps',
  standalone: true,
  imports: [CommonModule, ModalBaseComponent],
  templateUrl: './modal-steps.component.html',
  styleUrls: [],
})
export class ModalStepsComponent {
  @Input({ required: true }) open!: WritableSignal<boolean>;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  //new
  @Input({ required: true }) currentStep!: WritableSignal<number>;

  @Input({ required: true }) title!: string;
  @Input() description?: string;

  @Input() confirmBtn?: { text: string; isLoading?: boolean };
  @Output() onConfirm: EventEmitter<void> = new EventEmitter<void>();

  @Input() cancelBtn?: { text: string; isLoading?: boolean };
  @Output() onCancel: EventEmitter<void> = new EventEmitter<void>();

  //new
  @Input()
  steps!: TemplateRef<any>[];

  handleConfirm() {
    if (this.currentStep() === 2) {
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
