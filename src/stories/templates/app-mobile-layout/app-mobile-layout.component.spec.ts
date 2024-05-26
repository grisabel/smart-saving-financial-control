import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMobileLayoutComponent } from './app-mobile-layout.component';

describe('AppMobileLayoutComponent', () => {
  let component: AppMobileLayoutComponent;
  let fixture: ComponentFixture<AppMobileLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppMobileLayoutComponent]
    });
    fixture = TestBed.createComponent(AppMobileLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
