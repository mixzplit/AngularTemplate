import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarGerentesZonaComponent } from './listar-gerentes-zona.component';

const routes: Routes = [{ path: '', component: ListarGerentesZonaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListarGerentesZonaRoutingModule { }
