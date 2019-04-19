import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserCoursesComponent } from './view-user-courses.component';

describe('ViewUserCoursesComponent', () => {
  let component: ViewUserCoursesComponent;
  let fixture: ComponentFixture<ViewUserCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
