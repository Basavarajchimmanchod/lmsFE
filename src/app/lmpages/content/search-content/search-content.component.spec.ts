import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResourcesComponent } from './search-resources.component';

describe('SearchResourcesComponent', () => {
  let component: SearchresourcesComponent;
  let fixture: ComponentFixture<SearchresourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchresourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchresourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
