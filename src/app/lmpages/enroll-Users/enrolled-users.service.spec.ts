import { TestBed, inject } from '@angular/core/testing';

import { EnrolledUsersService } from './enrolled-users.service';

describe('EnrolledUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnrolledUsersService]
    });
  });

  it('should be created', inject([EnrolledUsersService], (service: EnrolledUsersService) => {
    expect(service).toBeTruthy();
  }));
});
