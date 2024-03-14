import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBaseComponent } from './content-base.component';

describe('ContentBaseComponent', () => {
  let component: ContentBaseComponent;
  let fixture: ComponentFixture<ContentBaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ContentBaseComponent]
    });
    fixture = TestBed.createComponent(ContentBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
