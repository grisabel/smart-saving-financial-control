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

export const Dropdown: Story = {
  args: {
    id: 'dropdown',
    label: 'label',
    placeholder: 'placeholder',
    options: [
      { value: 'a', label: 'Internet Explorer' },
      { value: 'b', label: 'Explorer' },
      { value: 'c', label: 'Internet' },
    ],
  },
};

export const DropdownDefaultValie: Story = {
  args: {
    id: 'dropdown',
    label: 'label',
    placeholder: 'placeholder',
    value: 'b',
    options: [
      { value: 'a', label: 'Internet Explorer' },
      { value: 'b', label: 'Explorer' },
      { value: 'c', label: 'Internet' },
    ],
  },
};
