import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserCatalogComponent } from './view-user-catalog.component';

describe('ViewUserCatalogComponent', () => {
  let component: ViewUserCatalogComponent;
  let fixture: ComponentFixture<ViewUserCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
