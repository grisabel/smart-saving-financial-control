import { type Meta, type StoryObj } from '@storybook/angular';

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

  onCloseHandler() {
    this.open.set(false);
    this.onClose.emit();
  }
}

const meta: Meta<ModalComponentStory> = {
  title: 'Atoms/Modal',
  component: ModalComponentStory,
  tags: ['autodocs'],
  argTypes: { onClose: { action: 'onClose' } },
};

export default meta;
type Story = StoryObj<ModalComponentStory>;

export const Modal: Story = {
  args: {
    title: 'titulo',
    description: 'description',
  },
};

export const ModalLargeContent: Story = {
  render: (args) => {
    const { title, description, ...props } = args;
    return {
      props,
      template: `
        <app-modal-story title="title" description="description" [contentTemplate]="contentLarge"/>
        <ng-template #contentLarge>
          <p [ngStyle]="{height:'150px'}">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus aliquam facilis praesentium aliquid repudiandae id necessitatibus sequi nesciunt, dignissimos ipsa voluptatum pariatur ex ratione. Distinctio officia placeat a et obcaecati. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus aliquam facilis praesentium aliquid repudiandae id necessitatibus sequi nesciunt, dignissimos ipsa voluptatum pariatur ex ratione. Distinctio officia placeat a et obcaecati.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus aliquam facilis praesentium aliquid repudiandae id necessitatibus sequi nesciunt, dignissimos ipsa voluptatum pariatur ex ratione. Distinctio officia placeat a et obcaecati.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus aliquam facilis praesentium aliquid repudiandae id necessitatibus sequi nesciunt, dignissimos ipsa voluptatum pariatur ex ratione. Distinctio officia placeat a et obcaecati.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus aliquam facilis praesentium aliquid repudiandae id necessitatibus sequi nesciunt, dignissimos ipsa voluptatum pariatur ex ratione. Distinctio officia placeat a et obcaecati.</p>
        </ng-template>
      `,
    };
  },
};
