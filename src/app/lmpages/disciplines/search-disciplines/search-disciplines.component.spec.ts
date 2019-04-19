import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDisciplinesComponent } from './search-disciplines.component';

describe('SearchDisciplinesComponent', () => {
  let component: SearchDisciplinesComponent;
  let fixture: ComponentFixture<SearchDisciplinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDisciplinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDisciplinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
