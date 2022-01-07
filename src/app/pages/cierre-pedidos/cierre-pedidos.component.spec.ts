import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CierrePedidosComponent } from './cierre-pedidos.component';

describe('CierrePedidosComponent', () => {
  let component: CierrePedidosComponent;
  let fixture: ComponentFixture<CierrePedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CierrePedidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CierrePedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
