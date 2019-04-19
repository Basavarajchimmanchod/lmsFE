import { TestBed, inject } from '@angular/core/testing';

import { DisciplinesService } from './disciplines.service';

describe('DisciplinesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisciplinesService]
    });
  });

  it('should be created', inject([DisciplinesService], (service: DisciplinesService) => {
    expect(service).toBeTruthy();
  }));
});
