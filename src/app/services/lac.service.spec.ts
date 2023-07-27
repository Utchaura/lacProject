import { TestBed } from '@angular/core/testing';

import { LacService } from './lac.service';

describe('LacService', () => {
  let service: LacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
