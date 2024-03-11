import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemMobileComponent } from './menu-item-mobile.component';

describe('MenuItemMobileComponent', () => {
  let component: MenuItemMobileComponent;
  let fixture: ComponentFixture<MenuItemMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MenuItemMobileComponent]
    });
    fixture = TestBed.createComponent(MenuItemMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
