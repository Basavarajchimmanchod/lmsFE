import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSystemRolesComponent } from './add-system-roles.component';

describe('AddSystemRolesComponent', () => {
  let component: AddSystemRolesComponent;
  let fixture: ComponentFixture<AddSystemRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSystemRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSystemRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
