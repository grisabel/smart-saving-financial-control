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
  argTypes: { onChange: { action: 'onChange' } },
};

export default meta;
type Story = StoryObj<MenuMobileComponent>;

export const MenuMobileExample: Story = {
  args: {
    initialActive: 'finanzas',
    items: [
      { id: 'finanzas', icon: 'financial', title: 'Finanzas' },
      { id: 'herramientas', icon: 'tools', title: 'Herramienta' },
      { id: 'contenido', icon: 'book', title: 'Contenido' },
      { id: 'mi-cuenta', icon: 'account', title: 'Mi cuente' },
    ],
  },
};
