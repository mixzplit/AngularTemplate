import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearGerenteZonaComponent } from './crear-gerente-zona.component';

const routes: Routes = [{ path: '', component: CrearGerenteZonaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrearGerenteZonaRoutingModule { }
