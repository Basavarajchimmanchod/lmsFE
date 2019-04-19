import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailDisciplinesComponent } from './view-detail-disciplines.component';

describe('ViewDetailDisciplinesComponent', () => {
  let component: ViewDetailDisciplinesComponent;
  let fixture: ComponentFixture<ViewDetailDisciplinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDetailDisciplinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailDisciplinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
