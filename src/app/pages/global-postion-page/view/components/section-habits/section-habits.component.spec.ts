import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHabitsComponent } from './section-habits.component';

describe('SectionHabitsComponent', () => {
  let component: SectionHabitsComponent;
  let fixture: ComponentFixture<SectionHabitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionHabitsComponent]
    });
    fixture = TestBed.createComponent(SectionHabitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
