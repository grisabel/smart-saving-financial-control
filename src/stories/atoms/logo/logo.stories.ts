import type { Meta, StoryObj } from '@storybook/angular';

import { LogoComponent } from './logo.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<LogoComponent> = {
  title: 'Atoms/Logo',
  component: LogoComponent,
  tags: ['autodocs'],
  render: (args: LogoComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<LogoComponent>;

export const LogoExample: Story = {};
