import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEnrollUsersComponent } from './add-enroll-users.component';

describe('AddUsersComponent', () => {
  let component: AddEnrollUsersComponent;
  let fixture: ComponentFixture<AddEnrollUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEnrollUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEnrollUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
