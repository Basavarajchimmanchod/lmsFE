import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUsersCoursesComponent } from './search-users-courses.component';

describe('SearchUsersCoursesComponent', () => {
  let component: SearchUsersCoursesComponent;
  let fixture: ComponentFixture<SearchUsersCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchUsersCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUsersCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
