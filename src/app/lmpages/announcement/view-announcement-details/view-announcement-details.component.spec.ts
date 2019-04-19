import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAnnouncementDetailsComponent } from './view-announcement-details.component';

describe('ViewAnnouncementDetailsComponent', () => {
  let component: ViewAnnouncementDetailsComponent;
  let fixture: ComponentFixture<ViewAnnouncementDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAnnouncementDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAnnouncementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
