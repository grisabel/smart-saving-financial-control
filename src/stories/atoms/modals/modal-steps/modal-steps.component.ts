import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  WritableSignal,
  effect,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalBaseComponent } from '../modal-base/modal-base.component';
import { ModalStepsInputs } from './modal-base.component.types';
import { ModalBaseOutputs } from '../modal-base/modal-base.component.types';
import {
  DotProps,
  DotStepComponent,
} from './components/dot-step/dot-step.component';

@Component({
  selector: 'app-modal-steps',
  standalone: true,
  imports: [CommonModule, ModalBaseComponent, DotStepComponent],
  templateUrl: './modal-steps.component.html',
  styleUrls: ['./modal-steps.component.scss'],
})
export class ModalStepsComponent implements OnInit {
  @Input({ required: true }) open!: ModalStepsInputs['open'];
  @Output() onClose: ModalBaseOutputs['onClose'] = new EventEmitter<boolean>();

  @Input({ required: true }) title!: ModalStepsInputs['title'];
  @Input() descriptions?: ModalStepsInputs['descriptions'];

  currentStep: WritableSignal<number> = signal(0);
  @Input() steps!: ModalStepsInputs['steps'];

  @Input() confirmBtns?: ModalStepsInputs['confirmBtns'];
  @Output() onConfirm: ModalBaseOutputs['onConfirm'] = new EventEmitter<void>();

  @Input() cancelBtns?: ModalStepsInputs['cancelBtns'];
  @Output() onCancel: ModalBaseOutputs['onCancel'] = new EventEmitter<void>();

  footerStep!: DotProps[];

  ngOnInit(): void {
    this.footerStep = (this.steps || []).map((_, i) => {
      return { isTransited: i === 0, hasError: false };
    });
  }

  constructor() {
    effect(() => {
      const _currentStep = this.currentStep();

      this.footerStep = (this.steps || []).map((_, i) => {
        return { isTransited: _currentStep === i, hasError: false };
      });
    });
  }

  handleConfirm() {
    if (this.currentStep() === this.steps.length - 1) {
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
