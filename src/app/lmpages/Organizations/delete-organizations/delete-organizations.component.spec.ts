import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteOrganizationsComponent } from './delete-organizations.component';

describe('DeleteOrganizationsComponent', () => {
  let component: DeleteOrganizationsComponent;
  let fixture: ComponentFixture<DeleteOrganizationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteOrganizationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteOrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
