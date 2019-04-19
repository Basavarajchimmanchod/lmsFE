import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditYesNoQuestionsComponent } from './edit-yes-no-questions.component';

describe('EditYesNoQuestionsComponent', () => {
  let component: EditYesNoQuestionsComponent;
  let fixture: ComponentFixture<EditYesNoQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditYesNoQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditYesNoQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
