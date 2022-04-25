import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BashsRoutingModule } from './bashs-routing.module';
import { BashsComponent } from './bashs.component';


@NgModule({
  declarations: [
    BashsComponent
  ],
  imports: [
    CommonModule,
    BashsRoutingModule
  ]
})
export class BashsModule { }
