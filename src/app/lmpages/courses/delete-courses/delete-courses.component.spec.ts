import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCoursesComponent } from './delete-courses.component';

describe('DeleteCoursesComponent', () => {
  let component: DeleteCoursesComponent;
  let fixture: ComponentFixture<DeleteCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
