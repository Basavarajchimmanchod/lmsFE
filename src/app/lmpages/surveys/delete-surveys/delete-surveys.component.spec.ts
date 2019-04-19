import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSurveysComponent } from './delete-surveys.component';

describe('DeleteSurveysComponent', () => {
  let component: DeleteSurveysComponent;
  let fixture: ComponentFixture<DeleteSurveysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSurveysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
