import { TestBed } from '@angular/core/testing';

import { DocumentsService } from './documents.service';
import { HttpClientModule } from '@angular/common/http';

describe('DocumentsService', () => {
  let service: DocumentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    }).compileComponents();
    service = TestBed.inject(DocumentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
