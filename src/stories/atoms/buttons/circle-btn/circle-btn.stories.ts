import type { Meta, StoryObj } from '@storybook/angular';

import { CircleBtnComponent } from './circle-btn.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<CircleBtnComponent> = {
  title: 'Atoms/Buttons/CircleButton',
  component: CircleBtnComponent,
  tags: ['autodocs'],
  render: (args: CircleBtnComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: { onClick: { action: 'buttonClick' } },
};

export default meta;
type Story = StoryObj<CircleBtnComponent>;

export const Btn1: Story = {
  args: { iconName: 'add' },
};

export const Btn2: Story = {
  args: { iconName: 'edit' },
};

export const Btn3: Story = {
  args: { iconName: 'delete' },
};
