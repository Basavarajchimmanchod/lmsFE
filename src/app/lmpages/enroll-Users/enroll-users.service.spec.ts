import { TestBed, inject } from '@angular/core/testing';

import { EnrollUsersService } from './enroll-users.service';

describe('EnrollUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnrollUsersService]
    });
  });

  it('should be created', inject([EnrollUsersService], (service: EnrollUsersService) => {
    expect(service).toBeTruthy();
  }));
});
