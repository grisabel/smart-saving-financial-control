import type { Meta, StoryObj } from '@storybook/angular';

import { BackLinkComponent } from './back-link.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<BackLinkComponent> = {
  title: 'Atoms/Link/BackLink',
  component: BackLinkComponent,
  tags: ['autodocs'],
  render: (args: BackLinkComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<BackLinkComponent>;

export const BackLinkExample: Story = {
  args: {
    href: '/',
    labelLink: 'Categorías',
  },
};
