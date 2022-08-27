import { TestBed } from '@angular/core/testing';

import { CierrePedidosService } from './cierre-pedidos.service';
import { HttpClientModule } from '@angular/common/http';

describe('CierrePedidosService', () => {
  let service: CierrePedidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    }).compileComponents();
    service = TestBed.inject(CierrePedidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
