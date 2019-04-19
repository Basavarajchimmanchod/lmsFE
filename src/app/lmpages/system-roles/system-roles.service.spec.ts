import { TestBed, inject } from '@angular/core/testing';

import { SystemRolesService } from './system-roles.service';

describe('SystemRolesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SystemRolesService]
    });
  });

  it('should be created', inject([SystemRolesService], (service: SystemRolesService) => {
    expect(service).toBeTruthy();
  }));
});
