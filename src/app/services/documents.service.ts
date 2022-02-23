import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  constructor(private http: HttpClient) { }

  getDocuments(){
    return this.http.get(`${environment.SERVER_TW}/api/files`)
    .pipe(
      map(resp => {
        return resp;
      })
    );
  }

}
