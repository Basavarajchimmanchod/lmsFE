import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDisciplinesComponent } from './delete-disciplines.component';

describe('DeleteDisciplinesComponent', () => {
  let component: DeleteDisciplinesComponent;
  let fixture: ComponentFixture<DeleteDisciplinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDisciplinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDisciplinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
