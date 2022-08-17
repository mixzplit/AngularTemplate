import { Component, OnInit } from '@angular/core';
import { faArrowRotateRight, faWind, faDroplet, faCloud, faCloudMoonRain, faCloudMoon, faCloudSun, faCloudBolt, faCloudRain, faCloudSunRain, faSmog, faSync, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from '../../services/weather.service';
import { faMoon, faSun, faSnowflake } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-widget-weather',
  templateUrl: './widget-weather.component.html',
  styleUrls: ['./widget-weather.component.css']
})
export class WidgetWeatherComponent implements OnInit {

  weatherData:any;
  valDay: boolean = false;
  // geolocalizacion
  latitude: number = 0;
  longitude: number = 0;
  humidity = faDroplet;
  wind = faWind;
  reload = faArrowRotateRight;
  spin = false;


  constructor(private weather: WeatherService) { }

  ngOnInit(): void {
        // carga Geolocalizacion
        this.getGeo();
        
  }
  /**
   * Recargar componente
   */
  reloadComponent(){
    this.spin = true;
    this.ngOnInit();
    
  }
  
  /**
   * Obtenemos los datos del clima
   * pasandole la latitud y longitud como 
   * parametros
   * @param lat 
   * @param lon 
   */
  getWeather(lat: number, lon: number){
    //console.log(lat + ' '+ lon);
    this.weather.getCurrentWeather(lat, lon).subscribe({
      next: (resp) => {
        //this.weatherData = resp;
        this.setWeatherData(resp);
        this.valDay = true;
        this.spin = false;
      },
      error: (err) => {
        console.log(err);
      }      
    });
  }

  /**
   * Metodo que setea los nuevos valores de la
   * respuesta de la api openweathermap que llega
   * como parametro
   * @param data 
   */
  setWeatherData(data: any){
    this.weatherData = data;
    let sunsetTime =  new Date(this.weatherData.sys.sunset * 1000);
    let sunriseTime = new Date(this.weatherData.sys.sunrise * 1000)
    this.weatherData.sunset_time = sunsetTime.toLocaleTimeString();
    this.weatherData.sunrise_time = sunriseTime.toLocaleTimeString();
    let currentDate = new Date();
    console.log(currentDate.getTime() + ' < ' + sunsetTime.getTime());
    this.weatherData.isDay = (currentDate.getTime() < sunsetTime.getTime() && currentDate.getTime() > sunriseTime.getTime());
    this.weatherData.temp_celcius = (this.weatherData.main.temp - 273.15).toFixed(0);
    this.weatherData.temp_min = (this.weatherData.main.temp_min - 273.15).toFixed(0);
    this.weatherData.temp_max = (this.weatherData.main.temp_max - 273.15).toFixed(0);
    this.weatherData.temp_feels_like = (this.weatherData.main.feels_like - 273.15).toFixed(0);
    this.weatherData.icon = `https://openweathermap.org/img/wn/${this.weatherData.weather[0].icon}.png`;
    this.weatherData.icon2x = `https://openweathermap.org/img/wn/${this.weatherData.weather[0].icon}@2x.png`;
    this.weatherData.description = this.weatherData.weather[0].description;
    this.weatherData.newIcon = this.getFasIcon(this.weatherData.weather[0].icon);
    console.log(this.weatherData);
    // Wind & Wind Direction
    const windMph = +(2.23694 * this.weatherData.wind.speed).toFixed(2);
    const windKmh = (1.609344 * windMph).toFixed(2);
    this.weatherData.windSpeedKmh = windKmh;
    this.weatherData.windSpeedMph = windMph;
    this.weatherData.windDir = this.convertDegreeToCompassPoint(this.weatherData.wind.deg);
  }

  /**
   * Metodo para obtener la geolocalizacion
   * del cliente, este metodo solo funcionara en
   * Produccion si la app es desplegada bajo un 
   * certificado SSL
   */
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

  getFasIcon(icon: string){
    let newIcon;

    switch (icon) {
      case '04n':
          newIcon = faCloud
          break;
      case '10n':
          newIcon = faCloudMoonRain;
          break;
      case '01n':
          newIcon = faMoon;
          break;
      case '02n':
        newIcon = faCloudMoon
          break;
      case '01d':
          newIcon = faSun
          break;
      case '02d':
          newIcon = faCloudSun
          break;
      case '04d':
          newIcon = faCloud
          break;
      case '03d':
          newIcon = faCloud
          break;
      case '03n':
          newIcon = faCloud;
          break;
      case '11d':
          newIcon = faCloudBolt;
          break;
      case '09d':
          newIcon = faCloudRain
          break;
      case '10d':
          newIcon = faCloudSunRain;
          break;
      case '13d':
          newIcon = faSnowflake;
          break;
      case '50d':
          newIcon = faSmog;
          break;
    }

    return newIcon
  }

  /**
   * Metodo para convertir la direccion del viento
   * segun los puntos cardinales.
   * @param wind_deg 
   * @returns 
   */
  convertDegreeToCompassPoint(wind_deg: number): string {
    const compassPoints = ["Norte", "Norte/NorEste", "NorEste", "Este/NorEste", 
                           "Este", "Este/SurEste", "SurEste", "Sur/SurEste",
                           "Sur", "Sur/Sur Oeste", "Sur Oeste", "Oeste/Sur Oeste", 
                           "Oeste", "Oeste/NorOeste", "NorOeste", "Norte/NorOeste"];
    const rawPosition = Math.floor((wind_deg / 22.5) + 0.5);
    const arrayPosition = (rawPosition % 16);
    return compassPoints[arrayPosition];
  };

}
