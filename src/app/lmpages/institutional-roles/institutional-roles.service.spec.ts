import { TestBed, inject } from '@angular/core/testing';

import { InstitutionalRolesService } from './institutional-roles.service';

describe('InstitutionalRolesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstitutionalRolesService]
    });
  });

  it('should be created', inject([InstitutionalRolesService], (service: InstitutionalRolesService) => {
    expect(service).toBeTruthy();
  }));
});
