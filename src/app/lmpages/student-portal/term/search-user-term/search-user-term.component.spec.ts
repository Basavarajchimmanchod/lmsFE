import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUserTermComponent } from './search-user-term.component';

describe('SearchUserTermComponent', () => {
  let component: SearchUserTermComponent;
  let fixture: ComponentFixture<SearchUserTermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchUserTermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUserTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
