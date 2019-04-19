import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUserCatalogComponent } from './search-user-catalog.component';

describe('SearchUserCatalogComponent', () => {
  let component: SearchUserCatalogComponent;
  let fixture: ComponentFixture<SearchUserCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchUserCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUserCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
