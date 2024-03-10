import { EventEmitter, WritableSignal } from '@angular/core';

export interface ModalBaseBtn {
  text: string;
  isLoading?: boolean;
}

export interface ModalBaseInputs {
  open: WritableSignal<boolean>;
  title: string;
  description?: string;
  confirmBtn?: ModalBaseBtn;
  cancelBtn?: ModalBaseBtn;
}

export interface ModalBaseOutputs {
  onClose: EventEmitter<boolean>;
  onConfirm: EventEmitter<void>;
  onCancel: EventEmitter<void>;
}
