import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsdeletesRoutingModule } from './productsdeletes-routing.module';
import { ProductsdeletesComponent } from './productsdeletes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    ProductsdeletesComponent
  ],
  imports: [
    CommonModule,
    ProductsdeletesRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class ProductsdeletesModule { }
