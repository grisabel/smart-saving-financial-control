import type { Meta, StoryObj } from '@storybook/angular';

import { CardBaseComponent } from './card-base.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<CardBaseComponent> = {
  title: 'Atoms/Card/CardBase',
  component: CardBaseComponent,
  tags: ['autodocs'],
  render: (args: CardBaseComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: { onClick: { action: 'buttonClick' } },
};

export default meta;
type Story = StoryObj<CardBaseComponent>;

export const CardBase: Story = {
  args: {
    label: 'Button',
  },
};
