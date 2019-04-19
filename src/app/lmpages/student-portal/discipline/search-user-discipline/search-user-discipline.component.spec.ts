import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUserDisciplineComponent } from './search-user-discipline.component';

describe('SearchUserDisciplineComponent', () => {
  let component: SearchUserDisciplineComponent;
  let fixture: ComponentFixture<SearchUserDisciplineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchUserDisciplineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUserDisciplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
