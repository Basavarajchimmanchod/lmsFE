import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDisciplinesComponent } from './add-disciplines.component';

describe('AddDisciplinesComponent', () => {
  let component: AddDisciplinesComponent;
  let fixture: ComponentFixture<AddDisciplinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDisciplinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDisciplinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
