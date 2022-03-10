import { Component, OnDestroy, OnInit } from '@angular/core';
import { ADTSettings } from 'angular-datatables/src/models/settings';
import { Subject } from 'rxjs';
import { SipProcessService } from '../../../services/sip-process.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnDestroy, OnInit {
  
  /** Guardamos la informacion de la respuesta API */
  response: any = {};

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();

  constructor(private sipService: SipProcessService) { }

  ngOnInit(): void {
    this.onList();
  }

  onList(){
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    };
    this.sipService.getUsuarios().subscribe({
      next: (resp) => {
        console.log(resp);
        this.response = (resp as any).resp
        /*this.loader = false;
        this.noData = false;
        if(this.response.offers.length > 0){
          this.show = true;
        }else{
          this.noData = true;
          this.errorMsg = `No hay ofertas para el Año/Campaña seleccionado.`;
        } */
        //this.dtTrigger.next();

      },
      error: (err) => {
        console.log(err.error.error.sqlMsg);
        //this.errorMsg = err.error.error.sqlMsg;
      }      
    });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
