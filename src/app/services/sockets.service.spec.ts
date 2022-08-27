import { TestBed } from '@angular/core/testing';

import { SocketsService } from './sockets.service';
import { HttpClientModule } from '@angular/common/http';

describe('SocketsService', () => {
  let service: SocketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    }).compileComponents();
    service = TestBed.inject(SocketsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
