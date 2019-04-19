import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDisciplinesComponent } from './edit-disciplines.component';

describe('EditDisciplinesComponent', () => {
  let component: EditDisciplinesComponent;
  let fixture: ComponentFixture<EditDisciplinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDisciplinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDisciplinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
