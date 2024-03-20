import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConceptBaseModalComponent } from './add-concept-base-modal.component';

describe('AddConceptBaseModalComponent', () => {
  let component: AddConceptBaseModalComponent;
  let fixture: ComponentFixture<AddConceptBaseModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddConceptBaseModalComponent]
    });
    fixture = TestBed.createComponent(AddConceptBaseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
