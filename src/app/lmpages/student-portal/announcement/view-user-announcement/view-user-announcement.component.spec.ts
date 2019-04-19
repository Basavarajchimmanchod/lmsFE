import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserAnnouncementComponent } from './view-user-announcement.component';

describe('ViewUserAnnouncementComponent', () => {
  let component: ViewUserAnnouncementComponent;
  let fixture: ComponentFixture<ViewUserAnnouncementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserAnnouncementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
