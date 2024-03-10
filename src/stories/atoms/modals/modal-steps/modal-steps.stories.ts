import { type Meta, type StoryObj } from '@storybook/angular';

import { ModalStepsComponent } from './modal-steps.component';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalStepsInputs } from './modal-base.component.types';
import { ModalBaseOutputs } from '../modal-base/modal-base.component.types';

@Component({
  selector: 'app-modal-steps-story',
  standalone: true,
  imports: [CommonModule, ModalStepsComponent],
  template: `
    <app-modal-steps
      [open]="open"
      [title]="title"
      (onClose)="onCloseHandler()"
      [descriptions]="descriptions"
      [steps]="[step1, step2, step3]"
      [confirmBtns]="confirmBtns"
      (onConfirm)="onConfirmHandler()"
      [cancelBtns]="cancelBtns"
      (onCancel)="onCancelHandler()"
    />

    <ng-template #step1>
      <div>Hola0</div>
    </ng-template>

    <ng-template #step2>
      <div>Hola1</div>
    </ng-template>

    <ng-template #step3>
      <div>Hola2</div>
    </ng-template>
  `,
  styleUrls: [],
})
export class ModalStepsComponentStory {
  open = signal(true);

  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input({ required: true }) title!: ModalStepsInputs['title'];
  @Input() descriptions?: ModalStepsInputs['descriptions'];

  @Input() confirmBtns?: ModalStepsInputs['confirmBtns'];
  @Output() onConfirm: ModalBaseOutputs['onConfirm'] = new EventEmitter<void>();

  @Input() cancelBtns?: ModalStepsInputs['cancelBtns'];
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
}

const meta: Meta<ModalStepsComponentStory> = {
  title: 'Atoms/Modals/ModalSteps',
  component: ModalStepsComponentStory,
  tags: ['autodocs'],
  argTypes: {
    onClose: { action: 'onClose' },
    onConfirm: { action: 'onConfirm' },
    onCancel: { action: 'onCancel' },
  },
};

export default meta;
type Story = StoryObj<ModalStepsComponentStory>;

export const Modal: Story = {
  args: {
    title: 'titulo',
    descriptions: ['description 1', 'description 2', 'description 3'],
    cancelBtns: [
      null,
      {
        text: 'cancel 2',
      },
      {
        text: 'cancel 3',
      },
    ],
    confirmBtns: [
      {
        text: 'confirm 1',
      },
      {
        text: 'confirm 2',
      },
      {
        text: 'confirm 3',
      },
    ],
  },
};
