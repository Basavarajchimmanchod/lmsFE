import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCatalogComponent } from './course-catalog.component';

describe('CourseCatalogComponent', () => {
  let component: CoursecatalogComponent;
  let fixture: ComponentFixture<CoursecatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursecatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursecatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
