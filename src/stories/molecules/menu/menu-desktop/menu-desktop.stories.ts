import type { Meta, StoryObj } from '@storybook/angular';

import { MenuDesktopComponent } from './menu-desktop.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<MenuDesktopComponent> = {
  title: 'Molecules/Menu/MenuDesktop',
  component: MenuDesktopComponent,
  tags: ['autodocs'],
  render: (args: MenuDesktopComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: { onChange: { action: 'onChange' } },
};

export default meta;
type Story = StoryObj<MenuDesktopComponent>;

export const MenuDesktopExample: Story = {
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
