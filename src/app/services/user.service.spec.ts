import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { of, map } from 'rxjs';
import { UsuarioModel } from '../models/usuarioModel';
import { CookieService } from 'ngx-cookie-service';

describe('UserService', () => {
  let service: UserService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>
  //TODO:Creamos esto por lo que necesita el metodo auth de nuestro servicio
  let cookieServiceSpy: jasmine.SpyObj<CookieService> 

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    cookieServiceSpy = jasmine.createSpyObj<CookieService>('CookieService', ['set','get']);
    service = new UserService(httpClientSpy as any, cookieServiceSpy as any);
  });



  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`Should be return a object user (Login)`, (done:DoneFn) => {
    //Mock de Datos
    const mockUserCredentials: UsuarioModel = {
      "username": "uda031",
      "password": "@DianaSantana#",
      userid: undefined,
      email: undefined,
      zona: undefined,
      nombre: undefined
    }

    const mockUserResult = {
      "msg": "Success",
      "data": {
          "cookie": {
              "originalMaxAge": 3600000,
              "expires": "2022-08-26T18:14:42.076Z",
              "httpOnly": true,
              "path": "/"
          },
          "username": "uda031",
          "mail": "DavidAcurero@Tupperware.com",
          "name": "David",
          "lastName": "Acurero",
          "title": "Programador Java Sr.",
          "memberOf": [
              "CN=gadmin,OU=CRP,OU=Groups,OU=ARG1,OU=Americas,OU=All Managed Areas,DC=global,DC=company,DC=domain"
          ],
          "rol": [
              "CN=gadmin"
          ],
          "department": "Sistemas",
          "co": "Sistemas",
          "company": "Tupperware Brands Argentina"
      },
      "session_id": "jUNzK06nZ1vxWTQwD1tlm9wslp2vqCiA"
    }

    httpClientSpy.post.and.returnValue(of(mockUserResult)); //TODO:Observable
    
    service.authUser(mockUserCredentials)
        .subscribe(resultado => {
          expect(resultado).toEqual(mockUserResult);
          done();
        });

  });

  

  it(`Should be false is not Authenticate "isAuth()"`, () => {
    //TODO:Mock de Datos
    expect(service.isAuth()).toBeFalse();
  });

});
