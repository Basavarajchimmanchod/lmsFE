import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProfilePasswordComponent } from './admin-profile-password.component';

describe('AdminProfilePasswordComponent', () => {
  let component: AdminProfilePasswordComponent;
  let fixture: ComponentFixture<AdminProfilePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProfilePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProfilePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
