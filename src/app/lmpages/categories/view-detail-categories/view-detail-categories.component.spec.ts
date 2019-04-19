import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailCategoriesComponent } from './view-detail-categories.component';

describe('ViewDetailCategoriesComponent', () => {
  let component: ViewDetailCategoriesComponent;
  let fixture: ComponentFixture<ViewDetailCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDetailCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
