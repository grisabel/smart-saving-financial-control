import type { Meta, StoryObj } from '@storybook/angular';

import { InputEmailComponent } from './input-email.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<InputEmailComponent> = {
  title: 'Atoms/Inputs/InputEmail',
  component: InputEmailComponent,
  tags: ['autodocs'],
  render: (args: InputEmailComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: { onChange: { action: 'onChange' } },
};

export default meta;
type Story = StoryObj<InputEmailComponent>;

export const InputEmail: Story = {
  args: {
    id: 'inputBaseId',
    label: 'label',
    placeholder: 'placeholder',
  },
};
