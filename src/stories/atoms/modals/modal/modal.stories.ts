import { type Meta, type StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';

import { ModalComponent } from './modal.component';
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
  selector: 'app-modal-story',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  template: `<app-modal
      [open]="open"
      (onClose)="onCloseHandler()"
      [title]="title"
      [description]="description"
      [confirmBtn]="confirmBtn"
      (onConfirm)="onConfirmHandler()"
      [cancelBtn]="cancelBtn"
      (onCancel)="onCancelHandler()"
    >
      <ng-container
        *ngTemplateOutlet="contentTemplate ? contentTemplate : defaultContent"
      >
      </ng-container>
    </app-modal>

    <ng-template #defaultContent>
      <p>Modal Example</p>
    </ng-template>`,
  styleUrls: [],
})
export class ModalComponentStory {
  open = signal(true);
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input({ required: true }) title!: string;
  @Input() description?: string;

  @Input()
  contentTemplate!: TemplateRef<any>;

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

const meta: Meta<ModalComponentStory> = {
  title: 'Atoms/Modals/Modal',
  component: ModalComponentStory,
  tags: ['autodocs'],
  argTypes: {
    onClose: { action: 'onClose' },
    onConfirm: { action: 'onConfirm' },
    onCancel: { action: 'onCancel' },
  },
};

export default meta;
type Story = StoryObj<ModalComponentStory>;

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

export const ModalCancelBtn: Story = {
  args: {
    title: 'titulo',
    description: 'description',
    cancelBtn: {
      text: 'cancel',
    },
  },
};

export const ModalCancelLoadingBtn: Story = {
  args: {
    title: 'titulo',
    description: 'description',
    cancelBtn: {
      text: 'cancel',
      isLoading: true,
    },
  },
};

export const ModalConfirmBtn: Story = {
  args: {
    title: 'titulo',
    description: 'description',
    confirmBtn: {
      text: 'confirm',
    },
  },
};

export const ModalConfirmLoadingBtn: Story = {
  args: {
    title: 'titulo',
    description: 'description',
    confirmBtn: {
      text: 'confirm',
      isLoading: true,
    },
  },
};

export const ModalLargeContent: Story = {
  render: (args) => {
    return {
      props: args,
      template: `
        <app-modal-story ${argsToTemplate(
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
