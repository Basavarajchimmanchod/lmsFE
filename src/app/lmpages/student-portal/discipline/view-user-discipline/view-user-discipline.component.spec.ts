import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserDisciplineComponent } from './view-user-discipline.component';

describe('ViewUserDisciplineComponent', () => {
  let component: ViewUserDisciplineComponent;
  let fixture: ComponentFixture<ViewUserDisciplineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserDisciplineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserDisciplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
