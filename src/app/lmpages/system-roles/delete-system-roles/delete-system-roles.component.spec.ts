import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSystemRolesComponent } from './delete-system-roles.component';

describe('DeleteSystemRolesComponent', () => {
  let component: DeleteSystemRolesComponent;
  let fixture: ComponentFixture<DeleteSystemRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSystemRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSystemRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
