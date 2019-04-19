import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersCoursesDetailsComponent } from './users-courses-details.component';

describe('UsersCoursesDetailsComponent', () => {
  let component: UsersCoursesDetailsComponent;
  let fixture: ComponentFixture<UsersCoursesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersCoursesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersCoursesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
