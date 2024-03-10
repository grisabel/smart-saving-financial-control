import type { Meta, StoryObj } from '@storybook/angular';

import { MenuMobileComponent } from './menu-mobile.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<MenuMobileComponent> = {
  title: 'Molecules/Menu/MenuMobile',
  component: MenuMobileComponent,
  tags: ['autodocs'],
  render: (args: MenuMobileComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<MenuMobileComponent>;

export const BtnPrimary: Story = {
  args: {},
};
