import {
  componentWrapperDecorator,
  type Meta,
  type StoryObj,
} from '@storybook/angular';

import { AppDesktopLayoutComponent } from './app-desktop-layout.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<AppDesktopLayoutComponent> = {
  title: 'Templates/AppDesktopLayout',
  component: AppDesktopLayoutComponent,
  tags: ['autodocs'],
  render: (args: AppDesktopLayoutComponent) => ({
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
type Story = StoryObj<AppDesktopLayoutComponent>;

export const AppDesktopLayoutExample: Story = {
  render: (args: any) => ({
    props: {
      ...args,
    },
    template: `<app-app-desktop-layout>
      <p slot="menu">menu</p>
      <p slot="content">content</p>
    </app-app-desktop-layout>`,
  }),
  args: {},
};
