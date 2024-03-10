import {
  Component,
  EventEmitter,
  Input,
  Output,
  WritableSignal,
} from '@angular/core';
import {
  ModalBaseBtn,
  ModalBaseOutputs,
} from '@stories/atoms/modals/modal-base/modal-base.component.types';

@Component({
  selector: 'app-add-category-modal',
  templateUrl: './add-category-modal.component.html',
  styleUrls: ['./add-category-modal.component.scss'],
})
export class AddCategoryModalComponent {
  @Input() open!: WritableSignal<boolean>;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onConfirm: ModalBaseOutputs['onConfirm'] = new EventEmitter<void>();
  @Output() onCancel: ModalBaseOutputs['onCancel'] = new EventEmitter<void>();

  onCloseHandler() {
    this.onClose.emit();
  }

  onConfirmHandler() {
    this.onConfirm.emit();
  }

  onCancelHandler() {
    this.onCancel.emit();
  }

  title: string = 'titulo';
  description: string = 'description 3';
  cancelBtn: ModalBaseBtn = {
    text: 'cancel 4',
  };
  confirmBtn: ModalBaseBtn = {
    text: 'confirm 1',
  };
}
