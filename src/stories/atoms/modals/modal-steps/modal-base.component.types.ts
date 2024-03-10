import { TemplateRef, WritableSignal } from '@angular/core';
import { ModalBaseBtn } from '../modal-base/modal-base.component.types';

export interface ModalStepsInputs {
  open: WritableSignal<boolean>;
  currentStep: WritableSignal<number>;
  title: string;
  descriptions: string[];
  steps: TemplateRef<any>[];
  confirmBtns: (ModalBaseBtn | null)[];
  cancelBtns: (ModalBaseBtn | null)[];
}
