import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptStepComponent } from './concept-step.component';

describe('ConceptStepComponent', () => {
  let component: ConceptStepComponent;
  let fixture: ComponentFixture<ConceptStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConceptStepComponent]
    });
    fixture = TestBed.createComponent(ConceptStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
