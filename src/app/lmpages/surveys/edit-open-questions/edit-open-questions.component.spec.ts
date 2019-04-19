import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOpenQuestionsComponent } from './edit-open-questions.component';

describe('EditOpenQuestionsComponent', () => {
  let component: EditOpenQuestionsComponent;
  let fixture: ComponentFixture<EditOpenQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOpenQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOpenQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
