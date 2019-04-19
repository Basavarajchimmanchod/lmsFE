import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCatalogDetailComponent } from './view-catalog-detail.component';

describe('ViewCatalogDetailComponent', () => {
  let component: ViewCatalogDetailComponent;
  let fixture: ComponentFixture<ViewCatalogDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCatalogDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCatalogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
