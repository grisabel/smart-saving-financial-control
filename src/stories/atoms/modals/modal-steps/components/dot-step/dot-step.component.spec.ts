import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotStepComponent } from './dot-step.component';

describe('DotStepComponent', () => {
  let component: DotStepComponent;
  let fixture: ComponentFixture<DotStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DotStepComponent]
    });
    fixture = TestBed.createComponent(DotStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
