import {
  componentWrapperDecorator,
  type Meta,
  type StoryObj,
} from '@storybook/angular';

import { AppMobileLayoutComponent } from './app-mobile-layout.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<AppMobileLayoutComponent> = {
  title: 'Templates/AppMobileLayout',
  component: AppMobileLayoutComponent,
  tags: ['autodocs'],
  render: (args: AppMobileLayoutComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  decorators: [
    componentWrapperDecorator(
      (story: any) => `<div style="height: 100dvh">${story}</div>`
    ),
  ],
};

export default meta;
type Story = StoryObj<AppMobileLayoutComponent>;

export const AppMobileLayoutExample: Story = {
  render: (args: any) => ({
    props: {
      ...args,
    },
    template: `<app-mobile-layout>
      <p slot="menu">menu</p>
      <p slot="content">content</p>
    </app-mobile-layout>`,
  }),
  args: {},
};
