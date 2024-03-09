import type { Meta, StoryObj } from '@storybook/angular';

import { InputTextComponent } from './input-text.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<InputTextComponent> = {
  title: 'Atoms/Inputs/InputText',
  component: InputTextComponent,
  tags: ['autodocs'],
  render: (args: InputTextComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: { onChange: { action: 'onChange' } },
};

export default meta;
type Story = StoryObj<InputTextComponent>;

export const InputBase: Story = {
  args: {
    id: 'inputBaseId',
    label: 'label',
    placeholder: 'placeholder',
  },
};
