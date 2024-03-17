import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAccountComponent } from './section-account.component';

describe('SectionAccountComponent', () => {
  let component: SectionAccountComponent;
  let fixture: ComponentFixture<SectionAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionAccountComponent]
    });
    fixture = TestBed.createComponent(SectionAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
