import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOrganizationsComponent } from './search-organizations.component';

describe('SearchOrganizationsComponent', () => {
  let component: SearchOrganizationsComponent;
  let fixture: ComponentFixture<SearchOrganizationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchOrganizationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchOrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
