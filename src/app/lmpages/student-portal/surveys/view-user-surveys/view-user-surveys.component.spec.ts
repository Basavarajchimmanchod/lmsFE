import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserSurveysComponent } from './view-user-surveys.component';

describe('ViewUserSurveysComponent', () => {
  let component: ViewUserSurveysComponent;
  let fixture: ComponentFixture<ViewUserSurveysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserSurveysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserSurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
