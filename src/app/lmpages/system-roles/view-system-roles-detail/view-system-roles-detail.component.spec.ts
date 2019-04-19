import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSystemRolesDetailComponent } from './view-system-roles-detail.component';

describe('ViewSystemRolesDetailComponent', () => {
  let component: ViewSystemRolesDetailComponent;
  let fixture: ComponentFixture<ViewSystemRolesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSystemRolesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSystemRolesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
