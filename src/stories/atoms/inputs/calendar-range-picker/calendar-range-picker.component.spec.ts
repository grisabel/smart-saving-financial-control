import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarRangePickerComponent } from './calendar-range-picker.component';

describe('CalendarRangePickerComponent', () => {
  let component: CalendarRangePickerComponent;
  let fixture: ComponentFixture<CalendarRangePickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CalendarRangePickerComponent]
    });
    fixture = TestBed.createComponent(CalendarRangePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
