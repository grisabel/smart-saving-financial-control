import { Component } from '@angular/core';
import { GlobalPositionStoreService } from '../../store/global-position-store.service';
import DateTimeService from '@app/utils/Datetime/DatetimeService';
import { CalendarRangePickerChangeEvent } from '@stories/atoms/inputs/calendar-range-picker/calendar-range-picker.component';

@Component({
  selector: 'app-section-summary',
  templateUrl: './section-summary.component.html',
  styleUrls: ['./section-summary.component.scss'],
})
export class SectionSummaryComponent {
  constructor(public globalPositionStore: GlobalPositionStoreService) {}

  format: 'year' | 'month' = 'year';
  range = DateTimeService.getDateLimits(DateTimeService.currentDate(), 'year');
  handleOnChange($event: CalendarRangePickerChangeEvent) {
    this.range = {
      dateStart: $event.dateStart,
      dateEnd: $event.dateEnd,
    };
    this.format = $event.format;
  }
}
