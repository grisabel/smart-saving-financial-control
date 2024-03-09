import type { Meta, StoryObj } from '@storybook/angular';

import { ModalComponent } from './modal.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ModalComponent> = {
  title: 'Atoms/Modal',
  component: ModalComponent,
  tags: ['autodocs'],
  render: (args: ModalComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: { onClick: { action: 'buttonClick' } },
};

export default meta;
type Story = StoryObj<ModalComponent>;

export const Modal: Story = {
  args: {
    label: 'Button',
  },
};
