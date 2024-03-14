import type { Meta, StoryObj } from '@storybook/angular';

import { ButtonComponent } from './button.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonComponent> = {
  title: 'Atoms/Buttons/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  render: (args: ButtonComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: { onClick: { action: 'buttonClick' } },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const BtnPrimary: Story = {
  args: {
    label: 'Button',
  },
};

export const BtnSecondary: Story = {
  args: {
    label: 'Button',
    color: 'secondary',
  },
};

export const BtnLoading: Story = {
  args: {
    label: 'Button',
    color: 'secondary',
    loading: true,
  },
};
