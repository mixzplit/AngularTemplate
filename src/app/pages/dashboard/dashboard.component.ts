import { Component, OnInit, ViewChild } from '@angular/core';
import { SocketsService } from '../../services/sockets.service';
import { Chart, LinearScale, BarController, CategoryScale, BarElement, LineController,
        PointElement, LineElement, Legend, Tooltip } from 'chart.js';
import { UserService } from 'src/app/services/user.service';
import { WeatherService } from 'src/app/services/weather.service';
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
  
  /** Usuarios Conectados */
  userCount: number | unknown;
  /** Cantidad de Ofertas Solicitadas */
  cantOfertaActual: number | unknown;
  /** Stock de la oferta actual */
  stockOfertaActual: number | unknown;
  finOfertaActual: string | any;
  descOfertaActual: string | unknown;
  offers: any;
  cardBody: boolean = false;
  //nextOffer: Date | undefined;
  weatherData:any;
  // geolocalizacion
  latitude: number = 0;
  longitude: number = 0;

  /** Constructor */
  constructor(private socket: SocketsService, private userService: UserService, private weather: WeatherService) { 
  }
  

  /** OnInit */
  ngOnInit(): void {
    //console.log('Dashboard');
    if(!this.userService.getCookie()){
      window.location.reload();
    }
    
    // carga Geolocalizacion
    this.getGeo();   


    this.socket.conectado();
  
    this.socket.desconectado();
    
    this.socket.offers().subscribe( (data:any) => {
      if(data != ''){
        this.cantOfertaActual = data[0].cant;
        this.stockOfertaActual = data[0].stock;
        this.finOfertaActual = data[0].fechafin;
        this.descOfertaActual = data[0].descripcion;
        this.offers = data;
        this.cardBody = true;
      }else{
        this.cardBody = false;
        
      }
    });
     
    //

    this.socket.userCount().subscribe( (data:any) => {
      //console.log(data);
      this.userCount = data.userCount;
    })
    
  }


/*   groupArrayOfObjects(list:any, key:any) {
    return list.reduce((rv:any, x:any) => {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }; */

  /* addData(chart:any, label:any, data:any) {
    chart.data.labels = label;
    chart.data.datasets.forEach((dataset:any) => {
        dataset.data.push(data);
    });
    chart.update();
  } */

/*   filterObjectProperties({id, name, image, episode}){
    return {id, name, image, episode};
  } */


  getWeather(lat: number, lon: number){
    
    this.weather.getCurrentWeather(lat, lon).subscribe({
      next: (resp) => {
        //this.weatherData = resp;
        this.setWeatherData(resp);
      },
      error: (err) => {
        console.log(err);
      }      
    });
  }

  setWeatherData(data: any){
    this.weatherData = data;
    let sunsetTime =  new Date(this.weatherData.sys.sunset * 1000);
    let sunriseTime = new Date(this.weatherData.sys.sunrise * 1000)
    this.weatherData.sunset_time = sunsetTime.toLocaleTimeString();
    this.weatherData.sunrise_time = sunriseTime.toLocaleTimeString();
    let currentDate = new Date();
    this.weatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.weatherData.temp_celcius = (this.weatherData.main.temp - 273.15).toFixed(0);
    this.weatherData.temp_min = (this.weatherData.main.temp_min - 273.15).toFixed(0);
    this.weatherData.temp_max = (this.weatherData.main.temp_max - 273.15).toFixed(0);
    this.weatherData.temp_feels_like = (this.weatherData.main.feels_like - 273.15).toFixed(0);
    this.weatherData.icon = `https://openweathermap.org/img/wn/${this.weatherData.weather[0].icon}.png`;
    this.weatherData.icon2x = `https://openweathermap.org/img/wn/${this.weatherData.weather[0].icon}@2x.png`;
    this.weatherData.description = this.weatherData.weather[0].description;

  }

  getGeo(){
    navigator.geolocation.getCurrentPosition( geo => {
      //console.log('Location accessed');
      this.latitude = geo.coords.latitude;
      this.longitude = geo.coords.longitude;
      this.getWeather(this.latitude, this.longitude);
    }, error => {
      console.log('User not allowed', error);
    });
  }

}
