import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailsOrganizationsComponent } from './view-details-organizations.component';

describe('ViewDetailsOrganizationsComponent', () => {
  let component: ViewDetailsOrganizationsComponent;
  let fixture: ComponentFixture<ViewDetailsOrganizationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDetailsOrganizationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailsOrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
