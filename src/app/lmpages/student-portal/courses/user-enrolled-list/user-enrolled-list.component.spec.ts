import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEnrolledListComponent } from './user-enrolled-list.component';

describe('UserEnrolledListComponent', () => {
  let component: UserEnrolledListComponent;
  let fixture: ComponentFixture<UserEnrolledListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEnrolledListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEnrolledListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
