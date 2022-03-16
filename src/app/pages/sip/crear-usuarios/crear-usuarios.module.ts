import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearUsuariosRoutingModule } from './crear-usuarios-routing.module';
import { CrearUsuariosComponent } from './crear-usuarios.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearUsuariosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CrearUsuariosRoutingModule
  ]
})
export class CrearUsuariosModule { }
