import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserAssignmentsDetailsComponent } from './view-user-assignments-details.component';

describe('ViewUserAssignmentsDetailsComponent', () => {
  let component: ViewUserAssignmentsDetailsComponent;
  let fixture: ComponentFixture<ViewUserAssignmentsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserAssignmentsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserAssignmentsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
