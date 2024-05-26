import type { Meta, StoryObj } from '@storybook/angular';

import { SpinnerComponent } from './spinner.component';
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spinner-story',
  standalone: true,
  imports: [CommonModule, SpinnerComponent],
  template: ` <app-spinner [open]="open" /> `,
  styleUrls: [],
})
export class spinnerComponentStory {
  open = signal(true);
}
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<spinnerComponentStory> = {
  title: 'Atoms/Spinner',
  component: spinnerComponentStory,
  tags: ['autodocs'],
  render: (args: spinnerComponentStory) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<spinnerComponentStory>;

export const SpinnerExample: Story = {
  args: {},
};
