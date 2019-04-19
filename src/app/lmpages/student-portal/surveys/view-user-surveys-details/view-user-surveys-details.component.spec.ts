import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserSurveysDetailsComponent } from './view-user-surveys-details.component';

describe('ViewUserSurveysDetailsComponent', () => {
  let component: ViewUserSurveysDetailsComponent;
  let fixture: ComponentFixture<ViewUserSurveysDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserSurveysDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserSurveysDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
