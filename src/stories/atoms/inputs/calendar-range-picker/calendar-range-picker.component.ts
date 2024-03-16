import {
  Attribute,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  WritableSignal,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBaseComponent } from '@stories/atoms/card/card-base/card-base.component';
import { IconComponent } from '@stories/atoms/icon/icon.component';
import { CircleBtnComponent } from '@stories/atoms/buttons/circle-btn/circle-btn.component';
import { DateTimeModel } from '@app/utils/Datetime/DatetimeInterfaceService';
import DateTimeService from '@app/utils/Datetime/DatetimeService';
import { DATE_FORMATS } from '@app/utils/Datetime/constants';

interface OnChangeEvent {
  dateStart: DateTimeModel;
  dateEnd: DateTimeModel;
  format: 'year' | 'month';
}

@Component({
  selector: 'app-calendar-range-picker',
  standalone: true,
  imports: [CommonModule, CardBaseComponent, IconComponent, CircleBtnComponent],
  templateUrl: './calendar-range-picker.component.html',
  styleUrls: ['./calendar-range-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarRangePickerComponent {
  @Input() dateCurrent!: DateTimeModel;
  @Input() dateStart!: DateTimeModel;
  @Input() dateEnd!: DateTimeModel;
  @Input() format!: 'year' | 'month';

  isYear = signal(this.format === 'year');

  @Output() onChange: EventEmitter<OnChangeEvent> =
    new EventEmitter<OnChangeEvent>();

  handleClick() {
    this.isYear.update((value) => !value);
  }

  displayDate() {
    console.log(this.dateCurrent);
    if (this.isYear()) {
      return DateTimeService.parse(this.dateCurrent, DATE_FORMATS.Year);
    } else {
      return DateTimeService.parse(this.dateCurrent, DATE_FORMATS.Month);
    }
  }
}
