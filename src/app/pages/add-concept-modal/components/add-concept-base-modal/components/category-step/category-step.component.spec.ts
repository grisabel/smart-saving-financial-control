import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryStepComponent } from './category-step.component';

describe('CategoryStepComponent', () => {
  let component: CategoryStepComponent;
  let fixture: ComponentFixture<CategoryStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryStepComponent]
    });
    fixture = TestBed.createComponent(CategoryStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
