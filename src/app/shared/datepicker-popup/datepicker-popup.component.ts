import { Component, Input } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { FormGroup } from '@angular/forms';

/**
 * Componente DatepickePopup.
 * 
 * Reutilizable.
 */
@Component({
  selector: 'app-datepicker-popup',
  templateUrl: './datepicker-popup.component.html',
  styleUrls: ['./datepicker-popup.component.css']
})
export class DatepickerPopupComponent  {
  /** interfaz que controla el modelo de fecha utilizado por el selector de fechas. */
  model!: NgbDateStruct;
  // Parametros que recibira nuestro componente reutilizable
  /** Input FormGroup para reutilizar el campo Fecha en cualquier formulario de la app */
  @Input() parentForm!: FormGroup
  /** Input que recibe el nombre que tendra el campo Fecha */
  @Input() fromControlName!: string;
  
  /** FantAwesome Icon faCalendarAlt */
  faCalendarAlt = faCalendarAlt;
  
}
