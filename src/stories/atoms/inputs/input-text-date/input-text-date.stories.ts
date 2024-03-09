import type { Meta, StoryObj } from '@storybook/angular';

import { InputTextDateComponent } from './input-text-date.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<InputTextDateComponent> = {
  title: 'Atoms/Inputs/InputTextDate',
  component: InputTextDateComponent,
  tags: ['autodocs'],
  render: (args: InputTextDateComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: { onChange: { action: 'onChange' } },
};

export default meta;
type Story = StoryObj<InputTextDateComponent>;

export const InputTextDate: Story = {
  args: {
    id: 'inputBaseId',
    label: 'label',
    placeholder: 'placeholder',
  },
};
