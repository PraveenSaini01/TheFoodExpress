import { TestBed } from '@angular/core/testing';

import { SessionlogService } from './sessionlog.service';

describe('SessionlogService', () => {
  let service: SessionlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
