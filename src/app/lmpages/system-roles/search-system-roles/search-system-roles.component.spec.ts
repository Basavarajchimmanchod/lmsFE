import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSystemRolesComponent } from './search-system-roles.component';

describe('SearchSystemRolesComponent', () => {
  let component: SearchSystemRolesComponent;
  let fixture: ComponentFixture<SearchSystemRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSystemRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSystemRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
