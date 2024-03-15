import {
  componentWrapperDecorator,
  type Meta,
  type StoryObj,
} from '@storybook/angular';

import { CalendarRangePickerComponent } from './calendar-range-picker.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<CalendarRangePickerComponent> = {
  title: 'Atoms/Inputs/CalendarRangePicker',
  component: CalendarRangePickerComponent,
  tags: ['autodocs'],
  render: (args: CalendarRangePickerComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  decorators: [
    componentWrapperDecorator(
      (story: any) => `<div style="margin: 32px">${story}</div>`
    ),
  ],
};

export default meta;
type Story = StoryObj<CalendarRangePickerComponent>;

export const CalendarRangePickerExample: Story = {
  args: {},
};
