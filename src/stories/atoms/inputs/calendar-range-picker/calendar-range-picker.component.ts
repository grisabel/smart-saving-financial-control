import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBaseComponent } from '@stories/atoms/card/card-base/card-base.component';
import { IconComponent } from '@stories/atoms/icon/icon.component';

@Component({
  selector: 'app-calendar-range-picker',
  standalone: true,
  imports: [CommonModule, CardBaseComponent, IconComponent],
  templateUrl: './calendar-range-picker.component.html',
  styleUrls: ['./calendar-range-picker.component.scss'],
})
export class CalendarRangePickerComponent {}
