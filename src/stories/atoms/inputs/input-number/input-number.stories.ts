import type { Meta, StoryObj } from '@storybook/angular';

import { InputNumberComponent } from './input-number.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<InputNumberComponent> = {
  title: 'Atoms/Inputs/InputNumber',
  component: InputNumberComponent,
  tags: ['autodocs'],
  render: (args: InputNumberComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: { onChange: { action: 'onChange' } },
};

export default meta;
type Story = StoryObj<InputNumberComponent>;

export const InputNumber: Story = {
  args: {
    id: 'inputBaseId',
    label: 'label',
    placeholder: 'placeholder',
    name: 'euro',
  },
};
