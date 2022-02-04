import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, LinearScale, BarController, CategoryScale, BarElement, LineController,
        PointElement, LineElement } from 'chart.js';
Chart.register(LinearScale, BarController, CategoryScale, BarElement, 
               LineController, PointElement, LineElement);
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
  titlePage: string = 'Dashboard';
  /** Guarda la informacion de elemento de la vista */
  canvas: any;
  /** Guarda el contexto de la vista */
  ctx: any;
  /** Este sera el valor que asignaremos al elemento canvas de la vista */
  @ViewChild('mychart') mychart: any;

  /** Constructor */
  constructor() { }
  
  /** OnInit */
  ngOnInit(): void {
    console.log('Dashboard');
  }
  /**
   * AfterViewInit
   */
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.initializeChartOptions();
    
  }

  /**
   * Metodo que inicializa las propiedades de ApexChart.
   * 
   * IMPORTANTE: Si al hacer "npm install" por primera vez, si falla al descargar la libreria de
   * de ApexChart, instalar con "npm install --force"
   */
  private initializeChartOptions(): void {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    console.log(this.ctx);
    new Chart(this.ctx, {
      type: 'line',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: "rgb(115 185 243 / 65%)",
              borderColor: "#007ee7",
              /*backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],*/
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
    });

  }

}
