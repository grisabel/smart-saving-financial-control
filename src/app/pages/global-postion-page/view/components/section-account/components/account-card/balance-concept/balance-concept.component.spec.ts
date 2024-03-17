import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceConceptComponent } from './balance-concept.component';

describe('BalanceConceptComponent', () => {
  let component: BalanceConceptComponent;
  let fixture: ComponentFixture<BalanceConceptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BalanceConceptComponent]
    });
    fixture = TestBed.createComponent(BalanceConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
