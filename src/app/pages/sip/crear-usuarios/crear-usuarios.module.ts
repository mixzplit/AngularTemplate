import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearUsuariosRoutingModule } from './crear-usuarios-routing.module';
import { CrearUsuariosComponent } from './crear-usuarios.component';


@NgModule({
  declarations: [
    CrearUsuariosComponent
  ],
  imports: [
    CommonModule,
    CrearUsuariosRoutingModule
  ]
})
export class CrearUsuariosModule { }
