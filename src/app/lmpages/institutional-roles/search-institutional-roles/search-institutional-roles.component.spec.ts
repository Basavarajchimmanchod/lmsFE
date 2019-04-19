import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInstitutionalRolesComponent } from './search-institutional-roles.component';

describe('SearchInstitutionalRolesComponent', () => {
  let component: SearchInstitutionalRolesComponent;
  let fixture: ComponentFixture<SearchInstitutionalRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchInstitutionalRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInstitutionalRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
