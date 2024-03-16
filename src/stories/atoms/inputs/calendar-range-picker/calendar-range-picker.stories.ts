import {
  componentWrapperDecorator,
  type Meta,
  type StoryObj,
} from '@storybook/angular';

import { CalendarRangePickerComponent } from './calendar-range-picker.component';
import DateTimeService from '@app/utils/Datetime/DatetimeService';
import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar-range-picker-story',
  standalone: true,
  imports: [CommonModule, CalendarRangePickerComponent],
  template: `<app-calendar-range-picker
    [dateCurrent]="dateCurrent"
    [dateStart]="range.dateStart"
    [dateEnd]="range.dateEnd"
    [format]="format"
  />`,
  styleUrls: [],
})
export class CalendarRangePickerComponentStory {
  format = 'year';
  dateCurrent = DateTimeService.currentDate();
  range = DateTimeService.getDateLimits(this.dateCurrent, 'year');

  @Output() onChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  onCloseHandler() {
    this.onChange.emit();
  }
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<CalendarRangePickerComponentStory> = {
  title: 'Atoms/Inputs/CalendarRangePicker',
  component: CalendarRangePickerComponentStory,
  tags: ['autodocs'],
  render: (args: CalendarRangePickerComponentStory) => ({
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
type Story = StoryObj<CalendarRangePickerComponentStory>;

export const CalendarRangePickerExample: Story = {
  args: {},
};
