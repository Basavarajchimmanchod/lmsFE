import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCategoriesComponent } from './search-categories.component';

describe('SearchcategoriesComponent', () => {C
  let component: SearchcategoriesComponent;
  let fixture: ComponentFixture<SearchcategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchcategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
