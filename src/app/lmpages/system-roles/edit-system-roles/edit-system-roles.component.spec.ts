import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSystemRolesComponent } from './edit-system-roles.component';

describe('EditSystemRolesComponent', () => {
  let component: EditSystemRolesComponent;
  let fixture: ComponentFixture<EditSystemRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSystemRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSystemRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
