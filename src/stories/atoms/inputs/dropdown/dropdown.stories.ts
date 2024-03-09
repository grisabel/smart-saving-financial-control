import type { Meta, StoryObj } from '@storybook/angular';

import { DropdownComponent } from './dropdown.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<DropdownComponent> = {
  title: 'Atoms/Inputs/Dropdown',
  component: DropdownComponent,
  tags: ['autodocs'],
  render: (args: DropdownComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: { onChange: { action: 'onChange' } },
};

export default meta;
type Story = StoryObj<DropdownComponent>;

export const InputBase: Story = {
  args: {
    id: 'inputBaseId',
    label: 'label',
    placeholder: 'placeholder',
    type: 'text',
  },
};
