import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUsuariosComponent } from './crear-usuarios.component';

const routes: Routes = [{ path: '', component: CrearUsuariosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrearUsuariosRoutingModule { }
