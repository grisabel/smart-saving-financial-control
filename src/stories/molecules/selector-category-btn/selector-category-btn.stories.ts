import type { Meta, StoryObj } from '@storybook/angular';

import { SelectorCategoryBtnComponent } from './selector-category-btn.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<SelectorCategoryBtnComponent> = {
  title: 'Molecules/SelectorCategoryBtn',
  component: SelectorCategoryBtnComponent,
  tags: ['autodocs'],
  render: (args: SelectorCategoryBtnComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<SelectorCategoryBtnComponent>;

export const CategoriesIncomeExample: Story = {
  args: {
    icons: ['paylist', 'revenues', 'scholarship', 'bets'],
  },
};

export const CategoriesExpensesExample: Story = {
  args: {
    icons: [
      'mortgage',
      'food',
      'pets',
      'electricity',
      'fuel',
      'heating',
      'internet',
      'water',
      'studies',
      'beers',
      'tax',
      'studies',
      'health',
      'insurance',
      'car',
    ],
  },
};
