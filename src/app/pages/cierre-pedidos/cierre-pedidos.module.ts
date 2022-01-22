import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { CierrePedidosRoutingModule } from './cierre-pedidos-routing.module';
import { CierrePedidosComponent } from './cierre-pedidos.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CierrePedidosComponent,
  ],
  imports: [
    CommonModule,
    CierrePedidosRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DatePipe
  ]
})
export class CierrePedidosModule { }
