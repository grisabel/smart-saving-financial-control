import { type Meta, type StoryObj } from '@storybook/angular';

import { ModalComponent } from './modal.component';
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-story',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  template: `<app-modal [open]="open" (onClose)="open.set(false)" />`,
  styleUrls: [],
})
export class ModalComponentStory {
  open = signal(true);
}

const meta: Meta<ModalComponentStory> = {
  title: 'Atoms/Modal',
  component: ModalComponentStory,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ModalComponentStory>;

export const Modal: Story = {
  args: {},
};
