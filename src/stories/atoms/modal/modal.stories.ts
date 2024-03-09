import { type Meta, type StoryObj } from '@storybook/angular';

import { ModalComponent } from './modal.component';
import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-story',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  template: `<app-modal [open]="open" (onClose)="onCloseHandler()" />`,
  styleUrls: [],
})
export class ModalComponentStory {
  open = signal(true);
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();

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
  args: {},
};
