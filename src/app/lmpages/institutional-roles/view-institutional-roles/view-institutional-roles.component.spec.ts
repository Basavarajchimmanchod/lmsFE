import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInstitutionalRolesComponent } from './view-institutional-roles.component';

describe('ViewInstitutionalRolesComponent', () => {
  let component: ViewInstitutionalRolesComponent;
  let fixture: ComponentFixture<ViewInstitutionalRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewInstitutionalRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInstitutionalRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
