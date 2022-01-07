import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CierrePedidosRoutingModule } from './cierre-pedidos-routing.module';
import { CierrePedidosComponent } from './cierre-pedidos.component';

@NgModule({
  declarations: [
    CierrePedidosComponent,
  ],
  imports: [
    CommonModule,
    CierrePedidosRoutingModule
  ],
})
export class CierrePedidosModule { }
