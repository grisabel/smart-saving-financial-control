import type { Meta, StoryObj } from '@storybook/angular';

import { InputTextAreaComponent } from './input-text-area.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<InputTextAreaComponent> = {
  title: 'Atoms/Inputs/InputTextArea',
  component: InputTextAreaComponent,
  tags: ['autodocs'],
  render: (args: InputTextAreaComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: { onChange: { action: 'onChange' } },
};

export default meta;
type Story = StoryObj<InputTextAreaComponent>;

export const InputText: Story = {
  args: {
    id: 'inputBaseId',
    label: 'label',
    placeholder: 'placeholder',
  },
};
