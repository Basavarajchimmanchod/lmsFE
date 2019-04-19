import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInstitutionalRolesComponent } from './edit-institutional-roles.component';

describe('EditInstitutionalRolesComponent', () => {
  let component: EditInstitutionalRolesComponent;
  let fixture: ComponentFixture<EditInstitutionalRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInstitutionalRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInstitutionalRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
