import {
  componentWrapperDecorator,
  type Meta,
  type StoryObj,
} from '@storybook/angular';

import { ActionBtnComponent } from './action-btn.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ActionBtnComponent> = {
  title: 'Atoms/Buttons/ActionBtn',
  component: ActionBtnComponent,
  tags: ['autodocs'],
  render: (args: ActionBtnComponent) => ({
    props: {
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
type Story = StoryObj<ActionBtnComponent>;

export const actionBtn1: Story = {
  args: { label: 'Categorías', iconName: 'chevron-right' },
};

export const actionBtn2: Story = {
  args: { colorBtn: 'secondary', label: 'Cerrar Sesión' },
};
