import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInstitutionalRolesDetailComponent } from './view-institutional-roles-detail.component';

describe('ViewInstitutionalRolesDetailComponent', () => {
  let component: ViewInstitutionalRolesDetailComponent;
  let fixture: ComponentFixture<ViewInstitutionalRolesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewInstitutionalRolesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInstitutionalRolesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
