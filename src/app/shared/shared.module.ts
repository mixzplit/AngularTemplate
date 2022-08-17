import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerPopupComponent } from './datepicker-popup/datepicker-popup.component';
import { InputTextComponent } from './input-text/input-text.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WidgetWeatherComponent } from './widget-weather/widget-weather.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    DatepickerPopupComponent,
    InputTextComponent,
    WidgetWeatherComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule,
    PipesModule
  ],
  exports: [
    DatepickerPopupComponent,
    WidgetWeatherComponent
  ]
})
export class SharedModule { }
