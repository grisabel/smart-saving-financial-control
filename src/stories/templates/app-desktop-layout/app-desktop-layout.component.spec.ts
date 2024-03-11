import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDesktopLayoutComponent } from './app-desktop-layout.component';

describe('AppDesktopLayoutComponent', () => {
  let component: AppDesktopLayoutComponent;
  let fixture: ComponentFixture<AppDesktopLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppDesktopLayoutComponent]
    });
    fixture = TestBed.createComponent(AppDesktopLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
