import type { Meta, StoryObj } from '@storybook/angular';

import { IconComponent } from './icon.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<IconComponent> = {
  title: 'Atoms/Icon',
  component: IconComponent,
  tags: ['autodocs'],
  render: (args: IconComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  })
};

export default meta;
type Story = StoryObj<IconComponent>;

export const Example: Story = {
  args: {
    name: 'calendar',
  },
};

export const Error: Story = {
  args: {
    name: 'email',
    color: "error"
  },
};

export const success: Story = {
  args: {
    name: 'user',
    color: "success"
  },
};
