import {
  Component,
  EventEmitter,
  Input,
  Output,
  Signal,
  WritableSignal,
} from '@angular/core';
import {
  ModalBaseBtn,
  ModalBaseOutputs,
} from '@stories/atoms/modals/modal-base/modal-base.component.types';

@Component({
  selector: 'app-add-concept-base-modal',
  templateUrl: './add-concept-base-modal.component.html',
  styleUrls: ['./add-concept-base-modal.component.scss'],
})
export class AddConceptBaseModalComponent {
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
  descriptions: string[] = ['description 1', 'description 2', 'description 3'];
  cancelBtns: ModalBaseBtn[] = [
    {
      text: 'cancel 1',
    },
    {
      text: 'cancel 2',
    },
    {
      text: 'cancel 3',
    },
  ];
  confirmBtns: ModalBaseBtn[] = [
    {
      text: 'confirm 1',
    },
    {
      text: 'confirm 2',
    },
    {
      text: 'confirm 3',
    },
  ];
}
