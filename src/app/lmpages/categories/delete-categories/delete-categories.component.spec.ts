import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCategoriesComponent } from './delete-categories.component';

describe('DeleteCategoriesComponent', () => {
  let component: DeleteCategoriesComponent;
  let fixture: ComponentFixture<DeleteCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
