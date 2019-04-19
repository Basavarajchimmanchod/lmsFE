import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContentDetailComponent } from './view-content-detail.component';

describe('ViewContentDetailComponent', () => {
  let component: ViewContentDetailComponent;
  let fixture: ComponentFixture<ViewContentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewContentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewContentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
