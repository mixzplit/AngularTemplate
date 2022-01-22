import { TestBed } from '@angular/core/testing';

import { CierrePedidosService } from './cierre-pedidos.service';

describe('CierrePedidosService', () => {
  let service: CierrePedidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CierrePedidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
