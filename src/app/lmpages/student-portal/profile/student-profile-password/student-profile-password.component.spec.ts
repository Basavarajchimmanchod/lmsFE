import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfilePasswordComponent } from './student-profile-password.component';

describe('StudentProfilePasswordComponent', () => {
  let component: StudentProfilePasswordComponent;
  let fixture: ComponentFixture<StudentProfilePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentProfilePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProfilePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
