import type { Meta, StoryObj } from '@storybook/angular';

import { InputBaseComponent } from './input-base.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<InputBaseComponent> = {
  title: 'Atoms/Inputs/InputBase',
  component: InputBaseComponent,
  tags: ['autodocs'],
  render: (args: InputBaseComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<InputBaseComponent>;

export const InputBase: Story = {
  args: {
    label: "Button",
  },
};
