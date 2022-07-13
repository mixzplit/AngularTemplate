import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearGerenteZonaRoutingModule } from './crear-gerente-zona-routing.module';
import { CrearGerenteZonaComponent } from './crear-gerente-zona.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearGerenteZonaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CrearGerenteZonaRoutingModule
  ]
})
export class CrearGerenteZonaModule { }
