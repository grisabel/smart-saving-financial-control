import type { Meta, StoryObj } from '@storybook/angular';

import { InputPasswordComponent } from './input-password.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<InputPasswordComponent> = {
  title: 'Atoms/Inputs/InputPssword',
  component: InputPasswordComponent,
  tags: ['autodocs'],
  render: (args: InputPasswordComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: { onChange: { action: 'onChange' } },
};

export default meta;
type Story = StoryObj<InputPasswordComponent>;

export const InputPassword: Story = {
  args: {
    id: 'inputBaseId',
    label: 'label',
    placeholder: 'placeholder',
  },
};
