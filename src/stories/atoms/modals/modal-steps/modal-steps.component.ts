import { Component, EventEmitter, Input, Output, Signal } from '@angular/core';
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
  @Input({ required: true }) open!: Signal<boolean>;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input({ required: true }) title!: string;
  @Input() description?: string;

  @Input() confirmBtn?: { text: string; isLoading?: boolean };
  @Output() onConfirm: EventEmitter<void> = new EventEmitter<void>();

  @Input() cancelBtn?: { text: string; isLoading?: boolean };
  @Output() onCancel: EventEmitter<void> = new EventEmitter<void>();
}
