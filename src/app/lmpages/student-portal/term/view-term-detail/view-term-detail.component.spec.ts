import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTermDetailComponent } from './view-term-detail.component';

describe('ViewTermDetailComponent', () => {
  let component: ViewTermDetailComponent;
  let fixture: ComponentFixture<ViewTermDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTermDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTermDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
