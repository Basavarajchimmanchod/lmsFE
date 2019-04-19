import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSurveysComponent } from './add-surveys.component';

describe('AddSurveysComponent', () => {
  let component: AddSurveysComponent;
  let fixture: ComponentFixture<AddSurveysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSurveysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
