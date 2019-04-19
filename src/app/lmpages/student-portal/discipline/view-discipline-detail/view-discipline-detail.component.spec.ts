import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDisciplineDetailComponent } from './view-discipline-detail.component';

describe('ViewDisciplineDetailComponent', () => {
  let component: ViewDisciplineDetailComponent;
  let fixture: ComponentFixture<ViewDisciplineDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDisciplineDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDisciplineDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
