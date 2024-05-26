import type { Meta, StoryObj } from '@storybook/angular';

import { CategoryBtnComponent } from './category-btn.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<CategoryBtnComponent> = {
  title: 'Atoms/Buttons/CategoryBtn',
  component: CategoryBtnComponent,
  tags: ['autodocs'],
  render: (args: CategoryBtnComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: { onClick: { action: 'buttonClick' } },
};

export default meta;
type Story = StoryObj<CategoryBtnComponent>;

export const Btn1: Story = {
  args: { iconName: 'add' },
};

export const Btn2: Story = {
  args: { iconName: 'bets' },
};

export const Btn3: Story = {
  args: { iconName: 'car' },
};
export const Btn4: Story = {
  args: { iconName: 'electricity' },
};
export const Btn5: Story = {
  args: { iconName: 'food' },
};

export const Btn6: Story = {
  args: { iconName: 'fuel' },
};
export const Btn7: Story = {
  args: { iconName: 'health' },
};
export const Btn8: Story = {
  args: { iconName: 'heating' },
};
export const Btn9: Story = {
  args: { iconName: 'insurance' },
};
export const Btn10: Story = {
  args: { iconName: 'internet' },
};
export const Btn11: Story = {
  args: { iconName: 'beers' },
};
export const Btn12: Story = {
  args: { iconName: 'mortgage' },
};
export const Btn13: Story = {
  args: { iconName: 'paylist' },
};
export const Btn14: Story = {
  args: { iconName: 'pets' },
};
export const Btn15: Story = {
  args: { iconName: 'revenues' },
};
export const Btn16: Story = {
  args: { iconName: 'scholarship' },
};
export const Btn17: Story = {
  args: { iconName: 'studies' },
};
export const Btn18: Story = {
  args: { iconName: 'tax' },
};
export const Btn19: Story = {
  args: { iconName: 'water' },
};
