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
import { TranslocoModule } from '@ngneat/transloco';

export interface CalendarRangePickerChangeEvent {
  dateStart: DateTimeModel;
  dateEnd: DateTimeModel;
  format: 'year' | 'month';
}

@Component({
  selector: 'app-calendar-range-picker',
  standalone: true,
  imports: [
    CommonModule,
    CardBaseComponent,
    IconComponent,
    CircleBtnComponent,
    TranslocoModule,
  ],
  templateUrl: './calendar-range-picker.component.html',
  styleUrls: ['./calendar-range-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarRangePickerComponent {
  isYear = signal<boolean | null>(null);
  disableIncrement = signal(false);
  disableDecrement = signal(false);

  @Input() onlyRead?: boolean;
  @Input() disableFormatChange?: boolean;

  @Input() dateMax?: DateTimeModel;
  @Input() dateMin?: DateTimeModel;

  @Input('format')
  set format(value: 'year' | 'month') {
    this._format = value;
    this.isYear.set(value === 'year');
  }

  get format() {
    return this._format;
  }
  _format!: 'year' | 'month';

  @Input('dateStart')
  set dateStart(value: DateTimeModel) {
    this._dateStart = this.calculateMinDate(value);
  }

  get dateStart() {
    return this._dateStart;
  }
  private _dateStart!: DateTimeModel;
  private calculateMinDate(value: DateTimeModel) {
    if (!this.dateMin) {
      return value;
    }
    const resul = DateTimeService.validate(
      value,
      this.dateMin,
      DateTimeService.VALIDATE_SET.UNTIL
    );

    this.disableDecrement.update(() => resul);
    return resul ? this.dateMin : value;
  }

  @Input('dateEnd')
  set dateEnd(value: DateTimeModel) {
    this._dateEnd = this.calculateDateMax(value);
  }

  get dateEnd() {
    return this._dateEnd;
  }
  private _dateEnd!: DateTimeModel;
  private calculateDateMax(value: DateTimeModel) {
    if (!this.dateMax) {
      return value;
    }
    const resul = DateTimeService.validate(
      this.dateMax,
      value,
      DateTimeService.VALIDATE_SET.UNTIL
    );

    this.disableIncrement.update(() => resul);
    return resul ? this.dateMax : value;
  }

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
      const year = DateTimeService.toDate(this.dateEnd).getFullYear();
      this.onChange.emit({
        dateStart: this.calculateMinDate({
          date: `01/01/${year - 1}`,
          format: DATE_FORMATS.Date,
        }),
        dateEnd: {
          date: `31/12/${year - 1}`,
          format: DATE_FORMATS.Date,
        },
        format: 'year',
      });
    } else {
      unit = 'months';
      this.onChange.emit({
        dateStart: this.calculateMinDate(
          DateTimeService.calculatePastDate(this.dateStart, {
            amount: 1,
            unit,
          })
        ),
        dateEnd: DateTimeService.calculatePastDate(this.dateEnd, {
          amount: 1,
          unit,
        }),
        format: 'month',
      });
    }
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
      dateEnd: this.calculateDateMax(
        DateTimeService.calculateFutureDate(this.dateEnd, {
          amount: 1,
          unit,
        })
      ),
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
