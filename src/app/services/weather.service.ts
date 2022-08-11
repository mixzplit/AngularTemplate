import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  dataResponse: any;

  constructor(private http: HttpClient) { }

  getCurrentWeather(lat: number, lon: number){
    
    return this.http.get(`${environment.OPEN_WEATHER_URL}weather?lat=${lat}&lon=${lon}&appid=${environment.OPEN_WEATHER_API_KEY}`)
        .pipe(
            map( resp => {
              this.dataResponse = resp;
              return resp;
            })
        )
  }

}
