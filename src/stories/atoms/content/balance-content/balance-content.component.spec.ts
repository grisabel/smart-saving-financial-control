import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceContentComponent } from './balance-content.component';

describe('BalanceContentComponent', () => {
  let component: BalanceContentComponent;
  let fixture: ComponentFixture<BalanceContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BalanceContentComponent]
    });
    fixture = TestBed.createComponent(BalanceContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
