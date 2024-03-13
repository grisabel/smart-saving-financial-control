import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorCategoryBtnComponent } from './selector-category-btn.component';

describe('SelectorCategoryBtnComponent', () => {
  let component: SelectorCategoryBtnComponent;
  let fixture: ComponentFixture<SelectorCategoryBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SelectorCategoryBtnComponent]
    });
    fixture = TestBed.createComponent(SelectorCategoryBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
