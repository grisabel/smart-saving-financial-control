import { EventEmitter, WritableSignal } from '@angular/core';

export interface ModalBaseBtn {
  text: string;
  isLoading?: boolean;
  isDisable?: boolean;
}

export interface ModalBaseInputs {
  open: WritableSignal<boolean>;
  title: string;
  description?: string;
  confirmBtn?: ModalBaseBtn | null;
  cancelBtn?: ModalBaseBtn | null;
}

export interface ModalBaseOutputs {
  onClose: EventEmitter<boolean>;
  onConfirm: EventEmitter<void>;
  onCancel: EventEmitter<void>;
}
