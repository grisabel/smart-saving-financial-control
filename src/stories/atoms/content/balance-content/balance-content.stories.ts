import {
  componentWrapperDecorator,
  type Meta,
  type StoryObj,
} from '@storybook/angular';

import { BalanceContentComponent } from './balance-content.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<BalanceContentComponent> = {
  title: 'Atoms/Content/BalanceContent',
  component: BalanceContentComponent,
  tags: ['autodocs'],
  render: (args: BalanceContentComponent) => ({
    props: {
      backgroundColor: null,
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
type Story = StoryObj<BalanceContentComponent>;

export const BalanceContent: Story = {
  args: {
    label: 'Button',
  },
};
