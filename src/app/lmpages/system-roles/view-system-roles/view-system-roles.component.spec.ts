import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSystemRolesComponent } from './view-system-roles.component';

describe('ViewSystemRolesComponent', () => {
  let component: ViewSystemRolesComponent;
  let fixture: ComponentFixture<ViewSystemRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSystemRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSystemRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
