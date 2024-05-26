import {
  componentWrapperDecorator,
  type Meta,
  type StoryObj,
} from '@storybook/angular';

import { DivisorComponent } from './divisor.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<DivisorComponent> = {
  title: 'Atoms/Divisor',
  component: DivisorComponent,
  tags: ['autodocs'],
  render: (args: DivisorComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  decorators: [
    componentWrapperDecorator(
      (story: any) => `<div style="margin-top: 32px">${story}</div>`
    ),
  ],
};

export default meta;
type Story = StoryObj<DivisorComponent>;

export const DivisorExample: Story = {
  args: {},
};
