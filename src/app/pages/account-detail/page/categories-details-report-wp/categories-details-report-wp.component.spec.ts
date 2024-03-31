import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesDetailsReportWpComponent } from './categories-details-report-wp.component';

describe('CategoriesDetailsReportWpComponent', () => {
  let component: CategoriesDetailsReportWpComponent;
  let fixture: ComponentFixture<CategoriesDetailsReportWpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesDetailsReportWpComponent]
    });
    fixture = TestBed.createComponent(CategoriesDetailsReportWpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
