import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CierrePedidosComponent } from './cierre-pedidos.component';

const routes: Routes = [
  {
    path: '',  component: CierrePedidosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CierrePedidosRoutingModule { }
