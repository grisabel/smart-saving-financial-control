import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountStepComponent } from './account-step.component';

describe('AccountStepComponent', () => {
  let component: AccountStepComponent;
  let fixture: ComponentFixture<AccountStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountStepComponent]
    });
    fixture = TestBed.createComponent(AccountStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
