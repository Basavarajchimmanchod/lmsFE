import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteInstitutionalRolesComponent } from './delete-institutional-roles.component';

describe('DeleteInstitutionalRolesComponent', () => {
  let component: DeleteInstitutionalRolesComponent;
  let fixture: ComponentFixture<DeleteInstitutionalRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteInstitutionalRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteInstitutionalRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
