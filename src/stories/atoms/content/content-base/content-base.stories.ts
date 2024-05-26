import {
  componentWrapperDecorator,
  type Meta,
  type StoryObj,
} from '@storybook/angular';

import { ContentBaseComponent } from './content-base.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ContentBaseComponent> = {
  title: 'Atoms/Content/ContentBase',
  component: ContentBaseComponent,
  tags: ['autodocs'],
  render: (args: ContentBaseComponent) => ({
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
type Story = StoryObj<ContentBaseComponent>;

export const ContentBase: Story = {
  args: {
    label: 'Button',
  },
};
