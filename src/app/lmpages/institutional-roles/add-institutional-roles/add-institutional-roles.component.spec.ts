import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInstitutionalRolesComponent } from './add-institutional-roles.component';

describe('AddInstitutionalRolesComponent', () => {
  let component: AddInstitutionalRolesComponent;
  let fixture: ComponentFixture<AddInstitutionalRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInstitutionalRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInstitutionalRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
