import { TestBed } from '@angular/core/testing';

import { OffersService } from './offers.service';
import { HttpClientModule } from '@angular/common/http';

describe('OffersService', () => {
  let service: OffersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    }).compileComponents();
    service = TestBed.inject(OffersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
