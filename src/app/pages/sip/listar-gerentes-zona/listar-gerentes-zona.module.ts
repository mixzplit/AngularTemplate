import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarGerentesZonaRoutingModule } from './listar-gerentes-zona-routing.module';
import { ListarGerentesZonaComponent } from './listar-gerentes-zona.component';
import { DataTablesModule } from 'angular-datatables';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    ListarGerentesZonaComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    FontAwesomeModule,
    ListarGerentesZonaRoutingModule
  ]
})
export class ListarGerentesZonaModule { }
