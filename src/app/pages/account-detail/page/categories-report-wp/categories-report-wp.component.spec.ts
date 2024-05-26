import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesReportWpComponent } from './categories-report-wp.component';

describe('CategoriesReportWpComponent', () => {
  let component: CategoriesReportWpComponent;
  let fixture: ComponentFixture<CategoriesReportWpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesReportWpComponent]
    });
    fixture = TestBed.createComponent(CategoriesReportWpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
