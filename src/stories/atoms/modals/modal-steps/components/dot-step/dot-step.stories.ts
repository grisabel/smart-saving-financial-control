import type { Meta, StoryObj } from '@storybook/angular';

import { DotStepComponent } from './dot-step.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<DotStepComponent> = {
  title: 'Atoms/Modals/ModalSteps/DotStep',
  component: DotStepComponent,
  tags: ['autodocs'],
  render: (args: DotStepComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<DotStepComponent>;

export const BtnPrimary: Story = {
  args: {
    steps: [
      { isTransited: true },
      { isTransited: false },
      { isTransited: false },
      { isTransited: false, hasError: true },
    ],
  },
};
