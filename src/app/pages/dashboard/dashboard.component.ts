import { Component, OnInit, ViewChild } from '@angular/core';
import { SocketsService } from '../../services/sockets.service';
import { Chart, LinearScale, BarController, CategoryScale, BarElement, LineController,
        PointElement, LineElement, Legend, Tooltip } from 'chart.js';
//import * as internal from 'stream';
import { map } from 'rxjs';
import { faOtter } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';
Chart.register(LinearScale, BarController, CategoryScale, BarElement, 
               LineController, PointElement, LineElement, Legend, Tooltip);
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
  ctx!: any;
  /** Este sera el valor que asignaremos al elemento canvas de la vista */
  @ViewChild('mychart') mychart: any;
  chartjs: any;
  /** Usuarios Conectados */
  userCount: number | unknown;
  /** Cantidad de Ofertas Solicitadas */
  cantOfertaActual: number | unknown;
  /** Stock de la oferta actual */
  stockOfertaActual: number | unknown;
  finOfertaActual: string | any;
  descOfertaActual: string | unknown;
  offers: any;

  /** Constructor */
  constructor(private socket: SocketsService, private userService: UserService) { 
    console.log('constructor');
  }
  
  /** OnInit */
  ngOnInit(): void {
    console.log('Dashboard');
    if(!this.userService.getCookie()){
      window.location.reload();
    }

    this.socket.conectado();
  
    this.socket.desconectado();
    
    this.socket.offers().subscribe( (data:any) => {

      this.cantOfertaActual = data[0].cant;
      this.stockOfertaActual = data[0].stock;
      this.finOfertaActual = data[0].fechafin;
      this.descOfertaActual = data[0].descripcion;
      this.offers = data;
    });
     
    this.socket.altaswebAnio().subscribe( (data:any) => {
      // Generamos un graficos con las
      // Altas Web del Año actual

      let dataVar = {
        datasets: [{
            backgroundColor: ["rgb(115 185 243 / 65%)","rgb(190 241 223 / 65%)",
                              "rgb(130 210 190 / 65%)","rgb(115 110 213 / 65%)",
                              "rgb(243 100 120 / 65%)","rgb(175 115 243 / 65%)",
                              "rgb(200 233 113 / 65%)"],
            borderWidth: 1,
            fill: false,
            data: []
        }]
     };


      if(this.chartjs){
        this.chartjs.destroy();
      }
      const canvas = <HTMLCanvasElement> document.getElementById('myChart');
      this.ctx = canvas.getContext('2d');
      this.chartjs = new Chart(this.ctx,{
          type:'bar',
          data:dataVar,
          options:{
            scales:{
              y:{
                beginAtZero: true
              }
            },
            plugins:{
              legend:{
                display:true,
                position: 'top',
                labels: {
                  color: 'rgb(255, 99, 132)'
                }
              }
            }
          }
      });

      for (const key in data) {
        this.chartjs.data['labels'].push(data[key].estado);
        this.chartjs.data['datasets'][0].label = `${data[key].campania} / ${data[key].anio}`;
        this.chartjs.data['datasets'][0].data.push(data[key].cantidad);
      }
      this.chartjs.update();
    });

    this.socket.userCount().subscribe( (data:any) => {
      //console.log(data);
      this.userCount = data.userCount;
    })


    
  }


  groupArrayOfObjects(list:any, key:any) {
    return list.reduce((rv:any, x:any) => {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  addData(chart:any, label:any, data:any) {
    chart.data.labels = label;
    chart.data.datasets.forEach((dataset:any) => {
        dataset.data.push(data);
    });
    chart.update();
  }

/*   filterObjectProperties({id, name, image, episode}){
    return {id, name, image, episode};
  } */

}
