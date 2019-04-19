import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserAnnouncementDetailComponent } from './view-user-announcement-detail.component';

describe('ViewUserAnnouncementDetailComponent', () => {
  let component: ViewUserAnnouncementDetailComponent;
  let fixture: ComponentFixture<ViewUserAnnouncementDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserAnnouncementDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserAnnouncementDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
