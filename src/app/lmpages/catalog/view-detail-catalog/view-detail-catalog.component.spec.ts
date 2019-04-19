import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailCatalogComponent } from './view-detail-catalog.component';

describe('ViewDetailCatalogComponent', () => {
  let component: ViewDetailCatalogComponent;
  let fixture: ComponentFixture<ViewDetailCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDetailCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
