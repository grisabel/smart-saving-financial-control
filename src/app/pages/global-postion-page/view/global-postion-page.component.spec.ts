import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalPostionPageComponent } from './global-postion-page.component';

describe('GlobalPostionPageComponent', () => {
  let component: GlobalPostionPageComponent;
  let fixture: ComponentFixture<GlobalPostionPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlobalPostionPageComponent]
    });
    fixture = TestBed.createComponent(GlobalPostionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
