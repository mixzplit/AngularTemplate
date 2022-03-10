import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarUsuariosRoutingModule } from './listar-usuarios-routing.module';
import { ListarUsuariosComponent } from './listar-usuarios.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    ListarUsuariosComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    ListarUsuariosRoutingModule,
  ]
})
export class ListarUsuariosModule { }
