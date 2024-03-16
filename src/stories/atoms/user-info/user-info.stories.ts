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
    src: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    userName: 'Pepe García Sánchez',
    objective: 'Jubilación',
  },
};
