import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSurveysDetailsComponent } from './view-surveys-details.component';

describe('ViewSurveysDetailsComponent', () => {
  let component: ViewSurveysDetailsComponent;
  let fixture: ComponentFixture<ViewSurveysDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSurveysDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSurveysDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
