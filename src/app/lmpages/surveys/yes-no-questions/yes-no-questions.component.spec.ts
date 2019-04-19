import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YesNoQuestionsComponent } from './yes-no-questions.component';

describe('YesNoQuestionsComponent', () => {
  let component: YesNoQuestionsComponent;
  let fixture: ComponentFixture<YesNoQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YesNoQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YesNoQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
