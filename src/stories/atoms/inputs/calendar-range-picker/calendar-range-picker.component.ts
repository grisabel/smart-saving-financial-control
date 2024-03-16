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

export interface CalendarRangePickerChangeEvent {
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
  dateCurrent = DateTimeService.currentDate();
  isYear = signal<boolean | null>(null);
  disableIncrement = signal(false);
  disableDecrement = signal(false);

  @Input('format')
  set format(value: 'year' | 'month') {
    this._format = value;
    this.isYear.set(value === 'year');
  }

  get format() {
    return this._format;
  }
  _format!: 'year' | 'month';

  @Input() dateStart!: DateTimeModel;

  @Input('dateEnd')
  set dateEnd(value: DateTimeModel) {
    const resul = DateTimeService.validate(
      this.dateCurrent,
      value,
      DateTimeService.VALIDATE_SET.UNTIL
    );

    this._dateEnd = resul ? this.dateCurrent : value;
    this.disableIncrement.update(() => resul);
  }

  get dateEnd() {
    return this._dateEnd;
  }
  private _dateEnd!: DateTimeModel;

  @Output() onChange: EventEmitter<CalendarRangePickerChangeEvent> =
    new EventEmitter<CalendarRangePickerChangeEvent>();

  handleClick() {
    let format!: 'year' | 'month';
    let dateRangeUpdate!: { dateStart: DateTimeModel; dateEnd: DateTimeModel };

    if (this.isYear()) {
      format = 'month';
    } else {
      format = 'year';
    }

    dateRangeUpdate = DateTimeService.getDateLimits(this.dateEnd, format);

    this.onChange.emit({
      dateStart: dateRangeUpdate.dateStart,
      dateEnd: dateRangeUpdate.dateEnd,
      format,
    });
  }

  handleDecrement() {
    let unit!: 'years' | 'months';

    if (this.isYear()) {
      unit = 'years';
    } else {
      unit = 'months';
    }

    this.onChange.emit({
      dateStart: DateTimeService.calculatePastDate(this.dateStart, {
        amount: 1,
        unit,
      }),
      dateEnd: DateTimeService.calculatePastDate(this.dateEnd, {
        amount: 1,
        unit,
      }),
      format: this.format,
    });
  }

  handleIncrement() {
    let unit!: 'years' | 'months';

    if (this.isYear()) {
      unit = 'years';
    } else {
      unit = 'months';
    }

    this.onChange.emit({
      dateStart: DateTimeService.calculateFutureDate(this.dateStart, {
        amount: 1,
        unit,
      }),
      dateEnd: DateTimeService.calculateFutureDate(this.dateEnd, {
        amount: 1,
        unit,
      }),
      format: this.format,
    });
  }

  displayDate() {
    if (this.isYear()) {
      return DateTimeService.parse(this.dateEnd, DATE_FORMATS.Year);
    } else {
      return DateTimeService.parse(this.dateEnd, DATE_FORMATS.Month);
    }
  }
}
