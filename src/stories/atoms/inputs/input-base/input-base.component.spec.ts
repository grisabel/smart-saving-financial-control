import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBaseComponent } from './input-base.component';

describe('InputBaseComponent', () => {
  let component: InputBaseComponent;
  let fixture: ComponentFixture<InputBaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InputBaseComponent]
    });
    fixture = TestBed.createComponent(InputBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
