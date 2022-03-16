import { Component, OnDestroy, OnInit } from '@angular/core';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { UsuarioModel } from 'src/app/models/usuarioModel';
import Swal from 'sweetalert2';
import { SipProcessService } from '../../../services/sip-process.service';


@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnDestroy, OnInit {
  title = 'Listar Usuarios de SIP';

  /**
   * Instancia de la Clase UsuarioModel
   */
  user: UsuarioModel = new UsuarioModel();

  errorMsg: string = '';
  errorsArray: string[] = [];

  faTimesCircle = faTimesCircle
  faModify = faPencilAlt;
  /** Guardamos la informacion de la respuesta API */
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

    this.sipService.getUsuarios().subscribe({
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
    Swal.fire({
      title: 'Borrar Usuario',
      text: `¿Esta seguro que desea borrar el usuario ${usuario.usuario} ?`,
      icon: 'question',
      showCancelButton: true,
      showConfirmButton: true
    }).then( resp => {
      // Si la respuesta es TRUE, entonces borramos el articulo
      // si no, no hace nada.
      if(resp.value){
        this.sipService.deleteUsuario(usuario.userid).subscribe({
          next: (resp) => {
            //this.onSubmit(); //refrescamos
            console.log(resp)
            Swal.fire(`Usuario eliminado con exito`);
          },
          error: (err) => {
            console.log(err);
            Swal.fire(`Oh!! No se pudo eliminar el usuario`);
          }
        });
      }  
    });
  }

  /**
   * Actualizar Usuario SIP
   * @param usuario 
   */
  onUpdate(usuario: any){
    Swal.fire({
      title: 'Login Form',
      html: `<input type="text" id="nombre" name="nombre" class="swal2-input" placeholder="Nombre" value="${usuario.usuario}">
      <input type="text" id="email" class="swal2-input" placeholder="Email" value="${usuario.mail}">
      <input type="text" id="zona" class="swal2-input" placeholder="Zona" value="${usuario.zona}">
      <input type="text" id="id" class="swal2-input" placeholder="Id" value="${usuario.userid}">`,
      confirmButtonText: 'Modificar',
      cancelButtonText: 'Cancelar',
      showCancelButton: true,
      focusConfirm: false,
      preConfirm: () => {
        return new Promise((resolve, reject) => {
          let nombre = $('input[id="nombre"]').val();
          let email = $('input[id="email"]').val();
          let zona = $('input[id="zona"]').val();
          let userid = $('input[id="id"]').val();

          this.user.nombre = nombre;
          this.user.email = email;
          this.user.zona = zona;
          this.user.userid = userid;

          // get your inputs using their placeholder or maybe add IDs to them
          resolve({
              nombre,
              email,
              zona,
          });
          console.log(!zona);
          if (!nombre || !email || !zona){
            reject({
                error: Swal.showValidationMessage(`Por favor agregue un nombre, email y/o zona`)
            });
          }
          // maybe also reject() on some condition
        });

      }
    }).then((result) => {
      this.sipService.putUsuario(this.user).subscribe({
        next: (resp) =>{
                Swal.fire(`Registro Actualizado`.trim());
        },
        error: (err) => {
          
          for (let index = 0; index < err.error.errors.length; index++) {
            this.errorMsg = err.error.errors[index].msg;
            this.errorsArray.push(this.errorMsg);            
          }

          Swal.fire(`${this.errorsArray}`.trim());
          // Limpiamos el array para que no agregue cada error que se produzca
          // si no el error actual
          this.errorsArray.splice(0, this.errorsArray.length);
        }
      });
    });    
  }

  /**
   * Destruye
   */
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
