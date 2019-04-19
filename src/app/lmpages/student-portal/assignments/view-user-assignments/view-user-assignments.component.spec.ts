import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserAssignmentsComponent } from './view-user-assignments.component';

describe('ViewUserAssignmentsComponent', () => {
  let component: ViewUserAssignmentsComponent;
  let fixture: ComponentFixture<ViewUserAssignmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserAssignmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
