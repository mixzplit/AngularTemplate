import { Component, VERSION } from '@angular/core';

/**
 * Componente Principal
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /** Titulo de la Página */
  title = 'SSP2';
  version = VERSION.full;
}
