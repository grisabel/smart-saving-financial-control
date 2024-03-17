import { Component } from '@angular/core';
import { GlobalPositionStoreService } from '../../store/global-position-store.service';
import { CalendarRangePickerChangeEvent } from '@stories/atoms/inputs/calendar-range-picker/calendar-range-picker.component';

@Component({
  selector: 'app-section-summary',
  templateUrl: './section-summary.component.html',
  styleUrls: ['./section-summary.component.scss'],
})
export class SectionSummaryComponent {
  constructor(public globalPositionStore: GlobalPositionStoreService) {}

  handleOnChange($event: CalendarRangePickerChangeEvent) {
    this.globalPositionStore.dataRange.set({
      dateStart: $event.dateStart,
      dateEnd: $event.dateEnd,
    });
    this.globalPositionStore.format.set($event.format);
  }
}
