import {
  Component,
  EventEmitter,
  Input,
  Output,
  Signal,
  WritableSignal,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconComponent } from '@stories/atoms/icon/icon.component';
import { ButtonComponent } from '@stories/atoms/buttons/button/button.component';
import {
  ModalBaseInputs,
  ModalBaseOutputs,
} from './modal-base.component.types';

@Component({
  selector: 'app-modal-base',
  standalone: true,
  imports: [CommonModule, IconComponent, ButtonComponent],
  templateUrl: './modal-base.component.html',
  styleUrls: ['./modal-base.component.scss'],
})
export class ModalBaseComponent {
  @Input({ required: true }) open!: ModalBaseInputs['open'];
  @Output() onClose: ModalBaseOutputs['onClose'] = new EventEmitter<boolean>();
  @Input() disableBackdrop!: boolean;
  @Input() disableClose!: boolean;

  @Input({ required: true }) title!: ModalBaseInputs['title'];
  @Input() description?: ModalBaseInputs['description'];

  @Input() confirmBtn?: ModalBaseInputs['confirmBtn'];
  @Output() onConfirm: ModalBaseOutputs['onConfirm'] = new EventEmitter<void>();

  @Input() cancelBtn?: ModalBaseInputs['cancelBtn'];
  @Output() onCancel: ModalBaseOutputs['onCancel'] = new EventEmitter<void>();

  handleClose() {
    this.open.set(false);
    this.onClose.emit();
  }

  handleBackdrop() {
    if (this.disableBackdrop) return;
    this.open.set(false);
    this.onClose.emit();
  }
}
