import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarUsuariosRoutingModule } from './listar-usuarios-routing.module';
import { ListarUsuariosComponent } from './listar-usuarios.component';
import { DataTablesModule } from 'angular-datatables';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    ListarUsuariosComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    FontAwesomeModule,
    ListarUsuariosRoutingModule,
  ]
})
export class ListarUsuariosModule { }
