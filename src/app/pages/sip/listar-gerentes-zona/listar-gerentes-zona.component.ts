import { Component, OnInit } from '@angular/core';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { SipProcessService } from '../../../services/sip-process.service';

@Component({
  selector: 'app-listar-gerentes-zona',
  templateUrl: './listar-gerentes-zona.component.html',
  styleUrls: ['./listar-gerentes-zona.component.css']
})
export class ListarGerentesZonaComponent implements OnInit {
  title = 'Listar Gerentes Zona';

  errorMsg: string = '';
  errorsArray: string[] = [];

  faTimesCircle = faTimesCircle
  faModify = faPencilAlt;

  response: any = {};

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private sipService: SipProcessService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 15,
      processing: true,
      language:{
        url: "https://cdn.datatables.net/plug-ins/1.11.5/i18n/es-ES.json"
      }
    };
    this.onList();    
  }

  onList(){

    this.sipService.getGerentesZona().subscribe({
      next: (resp: any) => {
        console.log(resp);
        this.response = resp
        /*this.loader = false;
        this.noData = false;
        if(this.response.offers.length > 0){
          this.show = true;
        }else{
          this.noData = true;
          this.errorMsg = `No hay ofertas para el Año/Campaña seleccionado.`;
        } */
        
        this.dtTrigger.next(0);

      },
      error: (err) => {
        console.log(err.error.error.sqlMsg);
        //this.errorMsg = err.error.error.sqlMsg;
      }      
    });
  }

  onDelete(usuario: any){

  }

  onUpdate(usuario: any){

  }
}
