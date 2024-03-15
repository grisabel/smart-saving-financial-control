import type { Meta, StoryObj } from '@storybook/angular';

import { UserInfoComponent } from './user-info.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<UserInfoComponent> = {
  title: 'Atoms/UserInfo',
  component: UserInfoComponent,
  tags: ['autodocs'],
  render: (args: UserInfoComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<UserInfoComponent>;

export const userInfoExample: Story = {
  args: {
    src: 'https://pixabay.com/es/vectors/foto-de-perfil-en-blanco-973460/',
    userName: 'Efrén García Sánchez',
    objective: 'Jubilación',
  },
};
