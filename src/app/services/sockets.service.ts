import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from "socket.io-client";
import { environment } from 'src/environments/environment';


/**
 * Servicio para manejar informacion en tiempo real
 * usando Socket Cliente y Socket.io
 */
@Injectable({
  providedIn: 'root'
})
export class SocketsService {
  
  socket:any;
  /** Ambiente */
  server = environment.SERVER_TW;

  constructor() {
    this.setupSocketConnection();
  }

  /**
   * Metodo que hace la conexion via SOCKET.IO
   */
  setupSocketConnection() {
    this.socket = io(this.server);
  }


/*   listen(eventName: string){
    return new Observable((Subscriber) => {
      this.socket.on('private-message', (data:unknown) => {
        Subscriber.next(data);
      });
    });
  }

  emit(eventName: string){
    //console.log('emitir');
    //this.socket.emit(eventName, 'hola');

    const mensaje = `Hola Mundo`;
    const info = {
        msg: mensaje,
        id: '123455',
        fecha: new Date().getTime()
    }
    this.socket.emit(eventName, info, (id: any) => {
        console.log('Desde el server!!', id);
    });
  } */

  /** Metodo que verifica que la conexion Socket esta activa */
  conectado(){
    this.socket.on('connect', () => {
      console.log('Conectado al Servidor');  
    });
  }
  /** Metodo que verifica que la conexion Socket se ha desconectado */
  desconectado(){
    this.socket.on('disconnect', () => {
      console.log('Desconectado del Servidor');
    });
  }
  /** Cuenta los usuario conectados via SOCKET */
  userCount(){
    return new Observable((Subscriber) => {
      this.socket.on('userCount', (data:any) => {
        Subscriber.next(data);
      });
    });
  }
  
  /**
   * Evento de Ofertas Actuales
   * @returns 
   */
  offers(){
    return new Observable((Subscriber) => {
      this.socket.on('offers', (data:any) => {
        Subscriber.next(data);
      });
    });
  }
  /**
   * Evento que obtiene las AltasWeb en tiempo real
   * @returns 
   */
  altasweb(){
    return new Observable((Subscriber) => {
      this.socket.on('altasweb', (data:Object) => {
        Subscriber.next(data);
      });
    });    
  }
  // Año Actual
  altaswebAnio(){
    return new Observable((Subscriber) => {
      this.socket.on('altasweb-anio-actual', (data:Object) => {
        Subscriber.next(data);
      });
    });    
  }

}


