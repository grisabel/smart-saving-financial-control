import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBaseComponent } from '@stories/atoms/card/card-base/card-base.component';
import { IconComponent } from '@stories/atoms/icon/icon.component';
import { CircleBtnComponent } from '@stories/atoms/buttons/circle-btn/circle-btn.component';

@Component({
  selector: 'app-calendar-range-picker',
  standalone: true,
  imports: [CommonModule, CardBaseComponent, IconComponent, CircleBtnComponent],
  templateUrl: './calendar-range-picker.component.html',
  styleUrls: ['./calendar-range-picker.component.scss'],
})
export class CalendarRangePickerComponent {
  isYear = signal(true);

  handleClick() {
    this.isYear.update((value) => !value);
  }
}
