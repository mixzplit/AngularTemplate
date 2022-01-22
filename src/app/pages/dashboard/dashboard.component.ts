import { Component, OnInit } from '@angular/core';

/**
 * Componente Dashboard
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  /** Titulo de la Página */
  title: string = 'Dashboard';

  /** Constructor */
  constructor() { }
  
  /** OnInit */
  ngOnInit(): void {
    console.log('Dashboard');
  }

}
