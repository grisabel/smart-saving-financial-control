import {
  componentWrapperDecorator,
  type Meta,
  type StoryObj,
} from '@storybook/angular';

import { ItemCategoryComponent } from './item-category.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ItemCategoryComponent> = {
  title: 'Organism/ItemCategory',
  component: ItemCategoryComponent,
  tags: ['autodocs'],
  render: (args: ItemCategoryComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<ItemCategoryComponent>;

export const ItemCategoryExample: Story = {
  args: {
    iconName: 'bets',
  },
};
