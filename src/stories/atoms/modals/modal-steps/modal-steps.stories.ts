import { type Meta, type StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';

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

@Component({
  selector: 'app-modal-steps-story',
  standalone: true,
  imports: [CommonModule, ModalStepsComponent],
  template: `
    <app-modal-steps
      [open]="open"
      [currentStep]="step"
      (onClose)="onCloseHandler()"
      [title]="title"
      [description]="description"
      [steps]="[step1, step2, step3]"
      [confirmBtn]="confirmBtn"
      (onConfirm)="onConfirmHandler()"
      [cancelBtn]="cancelBtn"
      (onCancel)="onCancelHandler()"
    />

    <ng-template #step1>
      <div *ngIf="step() === 0">Hola0</div>
    </ng-template>

    <ng-template #step2>
      <div *ngIf="step() === 1">Hola1</div>
    </ng-template>

    <ng-template #step3>
      <div *ngIf="step() === 2">Hola2</div>
    </ng-template>
  `,
  styleUrls: [],
})
export class ModalStepsComponentStory {
  open = signal(true);
  step = signal(0);
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input({ required: true }) title!: string;
  @Input() description?: string;

  @Input() confirmBtn?: { text: string; isLoading?: boolean };
  @Output() onConfirm: EventEmitter<void> = new EventEmitter<void>();

  @Input() cancelBtn?: { text: string; isLoading?: boolean };
  @Output() onCancel: EventEmitter<void> = new EventEmitter<void>();

  onCloseHandler() {
    this.open.set(false);
    this.onClose.emit();
  }

  onConfirmHandler() {
    this.open.set(false);
    this.onConfirm.emit();
  }

  onCancelHandler() {
    this.open.set(false);
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
    description: 'description',
    cancelBtn: {
      text: 'cancel',
    },
    confirmBtn: {
      text: 'confirm',
    },
  },
};

export const ModalLargeContent: Story = {
  render: (args) => {
    return {
      props: args,
      template: `
        <app-modal-steps-story ${argsToTemplate(
          args
        )} [contentTemplate]="contentLarge"/>
        <ng-template #contentLarge>
          <p [ngStyle]="{height:'150px'}">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus aliquam facilis praesentium aliquid repudiandae id necessitatibus sequi nesciunt, dignissimos ipsa voluptatum pariatur ex ratione. Distinctio officia placeat a et obcaecati. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus aliquam facilis praesentium aliquid repudiandae id necessitatibus sequi nesciunt, dignissimos ipsa voluptatum pariatur ex ratione. Distinctio officia placeat a et obcaecati.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus aliquam facilis praesentium aliquid repudiandae id necessitatibus sequi nesciunt, dignissimos ipsa voluptatum pariatur ex ratione. Distinctio officia placeat a et obcaecati.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus aliquam facilis praesentium aliquid repudiandae id necessitatibus sequi nesciunt, dignissimos ipsa voluptatum pariatur ex ratione. Distinctio officia placeat a et obcaecati.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus aliquam facilis praesentium aliquid repudiandae id necessitatibus sequi nesciunt, dignissimos ipsa voluptatum pariatur ex ratione. Distinctio officia placeat a et obcaecati.</p>
        </ng-template>
      `,
    };
  },
  args: {
    title: 'title',
    description: 'description',
    cancelBtn: {
      text: 'cancel',
    },
    confirmBtn: {
      text: 'confirm',
    },
  },
};
