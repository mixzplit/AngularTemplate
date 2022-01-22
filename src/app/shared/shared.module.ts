import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerPopupComponent } from './datepicker-popup/datepicker-popup.component';
import { InputTextComponent } from './input-text/input-text.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    DatepickerPopupComponent,
    InputTextComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule
  ],
  exports: [
    DatepickerPopupComponent
  ]
})
export class SharedModule { }
