import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CierrePedidosComponent } from './cierre-pedidos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

describe('CierrePedidosComponent', () => {
  let component: CierrePedidosComponent;
  let fixture: ComponentFixture<CierrePedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CierrePedidosComponent ],
      imports: [ReactiveFormsModule, HttpClientModule],
      providers: [DatePipe]
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
