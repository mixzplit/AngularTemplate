import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BashsComponent } from './bashs.component';

const routes: Routes = [{ path: '', component: BashsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BashsRoutingModule { }
