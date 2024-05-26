import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsTableComponent } from './tabs-table.component';

describe('TabsTableComponent', () => {
  let component: TabsTableComponent;
  let fixture: ComponentFixture<TabsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TabsTableComponent]
    });
    fixture = TestBed.createComponent(TabsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
