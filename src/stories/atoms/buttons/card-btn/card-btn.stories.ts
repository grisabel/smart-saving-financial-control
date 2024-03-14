import {
  componentWrapperDecorator,
  type Meta,
  type StoryObj,
} from '@storybook/angular';

import { CardBtnComponent } from './card-btn.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<CardBtnComponent> = {
  title: 'Atoms/Buttons/CardBtn',
  component: CardBtnComponent,
  tags: ['autodocs'],
  render: (args: CardBtnComponent) => ({
    props: {
      ...args,
    },
  }),
  decorators: [
    componentWrapperDecorator(
      (story: any) => `<div style="margin: 32px">${story}</div>`
    ),
  ],
  argTypes: { onClick: { action: 'buttonClick' } },
};

export default meta;
type Story = StoryObj<CardBtnComponent>;

export const CardBtnIcome: Story = {
  args: { iconName: 'income', title: 'Ingresos' },
};

export const CardBtnExpense: Story = {
  args: { iconName: 'expense', title: 'Gastos' },
};
