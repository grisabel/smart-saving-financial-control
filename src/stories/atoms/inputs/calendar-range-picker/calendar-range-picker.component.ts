import {
  Attribute,
  ChangeDetectionStrategy,
  Component,
  Input,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBaseComponent } from '@stories/atoms/card/card-base/card-base.component';
import { IconComponent } from '@stories/atoms/icon/icon.component';
import { CircleBtnComponent } from '@stories/atoms/buttons/circle-btn/circle-btn.component';
import { DateTimeModel } from '@app/utils/Datetime/DatetimeInterfaceService';
import DateTimeService from '@app/utils/Datetime/DatetimeService';
import { DATE_FORMATS } from '@app/utils/Datetime/constants';

@Component({
  selector: 'app-calendar-range-picker',
  standalone: true,
  imports: [CommonModule, CardBaseComponent, IconComponent, CircleBtnComponent],
  templateUrl: './calendar-range-picker.component.html',
  styleUrls: ['./calendar-range-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarRangePickerComponent {
  // Month: "MM/yyyy",
  // Year: "yyyy",
  @Input() maxDate!: DateTimeModel;
  isYear = signal(true);

  handleClick() {
    this.isYear.update((value) => !value);
  }

  displayDate() {
    console.log(this.maxDate);
    if (this.isYear()) {
      return DateTimeService.parse(this.maxDate, DATE_FORMATS.Year);
    } else {
      return DateTimeService.parse(this.maxDate, DATE_FORMATS.Month);
    }
  }
}
