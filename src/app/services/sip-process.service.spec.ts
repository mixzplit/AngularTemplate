import { TestBed } from '@angular/core/testing';

import { SipProcessService } from './sip-process.service';

describe('SipProcessService', () => {
  let service: SipProcessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SipProcessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
