import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserTermComponent } from './view-user-term.component';

describe('ViewUserTermComponent', () => {
  let component: ViewUserTermComponent;
  let fixture: ComponentFixture<ViewUserTermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserTermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
