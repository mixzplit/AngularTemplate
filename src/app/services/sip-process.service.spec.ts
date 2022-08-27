import { TestBed } from '@angular/core/testing';

import { SipProcessService } from './sip-process.service';
import { HttpClientModule } from '@angular/common/http';

describe('SipProcessService', () => {
  let service: SipProcessService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    }).compileComponents();
    service = TestBed.inject(SipProcessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
