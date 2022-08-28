import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { SocketsService } from 'src/app/services/sockets.service';
import { Chart, LinearScale, BarController, CategoryScale, BarElement, LineController,
  PointElement, LineElement, Legend, Tooltip } from 'chart.js';
  // Register
Chart.register(LinearScale, BarController, CategoryScale, BarElement, 
    LineController, PointElement, LineElement, Legend, Tooltip);

@Component({
  selector: 'app-altas-web-onlive',
  templateUrl: './altas-web-onlive.component.html',
  styleUrls: ['./altas-web-onlive.component.css']
})
export class AltasWebOnliveComponent implements OnInit, AfterViewInit {
  /** Este sera el valor que asignaremos al elemento canvas de la vista */
  @ViewChild('myChart') 
  myChart: any;

 

  /** Guarda el contexto de la vista */
  ctx!: any;
  chartjs: any;

  constructor(private socket: SocketsService) { }

  ngOnInit(): void {
  }


  ngAfterViewInit(): void {
    //console.log("Cuando se carga?");
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

      // Buscamos si ya existe un objeto Chart
      // Y si existe destruye el objeto y carga uno nuevo
      let chartExist = Chart.getChart("myChart");
      if(chartExist != undefined){
        chartExist.destroy();
      }
      
      const canvas = <HTMLCanvasElement> document.getElementById("myChart");
      //const canvas =  ElementRef<HTMLCanvasElement>
      
      console.log(canvas);
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
  }


}
