import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionActionsComponent } from './section-actions.component';

describe('SectionActionsComponent', () => {
  let component: SectionActionsComponent;
  let fixture: ComponentFixture<SectionActionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionActionsComponent]
    });
    fixture = TestBed.createComponent(SectionActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
