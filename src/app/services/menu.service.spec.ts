import { TestBed } from '@angular/core/testing';

import { MenuService } from './menu.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('MenuService', () => {
  let service: MenuService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new MenuService(httpClientSpy as any);
  });

/*   beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    }).compileComponents();
    service = TestBed.inject(MenuService);
  }); */

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should be return a JSON Object "getMenu()`, (done: DoneFn) => {
    
    const mockExpectResult = {
      "msg": "Success",
      "menus": [
          {
              "_id": "62e87f61164eb4ca925f0b39",
              "seq": 1,
              "title": "Dashboard",
              "link": "/home/dashboard",
              "icon": "faTachometerAlt",
              "parent": 0,
              "roles": [
                  "gadmin",
                  "gvtassup",
                  "gmktgsup"
              ],
              "created_at": "2022-08-02T01:35:29.067Z",
              "updatedAt": "2022-08-02T01:35:29.067Z",
              "__v": 0
          },
          {
              "_id": "62e87f82164eb4ca925f0b3b",
              "seq": 2,
              "title": "Cierre Pedidos WOE",
              "link": "/home/cierrePedidos",
              "icon": "faCalendarAlt",
              "parent": 0,
              "roles": [
                  "gadmin",
                  "gvtassup"
              ],
              "created_at": "2022-08-02T01:36:02.045Z",
              "updatedAt": "2022-08-02T01:36:02.045Z",
              "__v": 0
          },
          {
              "_id": "62e8808098f9de2164a6523c",
              "seq": 10,
              "title": "WOE",
              "link": "#",
              "icon": "faThList",
              "parent": 0,
              "roles": [
                  "gadmin",
                  "gvtassup",
                  "gmktgsup"
              ],
              "created_at": "2022-08-02T01:40:16.911Z",
              "updatedAt": "2022-08-02T01:40:16.911Z",
              "__v": 0
          },
          {
              "_id": "62e890c4961c007f9ce3fd7a",
              "seq": 11,
              "title": "SIP",
              "link": "#",
              "icon": "faThList",
              "parent": 0,
              "roles": [
                  "gadmin"
              ],
              "created_at": "2022-08-02T02:49:40.949Z",
              "updatedAt": "2022-08-02T02:49:40.949Z",
              "__v": 0
          }
      ]
    }

    httpClientSpy.get.and.returnValue(of(mockExpectResult));

    service.getMenu().subscribe(resultado => {
        expect(resultado).toEqual(mockExpectResult);
        done();
      });

  });

  it(`should be return a JSON Object "getSubMenu()`, (done: DoneFn) => {
    const mockExpectResult = {
      "msg": "Success",
      "menus": [
          {
              "_id": "62e87f97164eb4ca925f0b3d",
              "seq": 3,
              "title": "Articulos Woe",
              "link": "/home/products",
              "icon": "faOutdent",
              "parent": 10,
              "roles": [
                  "gadmin",
                  "gmktgsup"
              ],
              "created_at": "2022-08-02T01:36:23.569Z",
              "updatedAt": "2022-08-02T01:36:23.569Z",
              "__v": 0
          },
          {
              "_id": "62e87faa164eb4ca925f0b3f",
              "seq": 4,
              "title": "Articulos Eliminados Woe",
              "link": "/home/productsDelete",
              "icon": "faOutdent",
              "parent": 10,
              "roles": [
                  "gadmin",
                  "gmktgsup"
              ],
              "created_at": "2022-08-02T01:36:42.348Z",
              "updatedAt": "2022-08-02T01:36:42.348Z",
              "__v": 0
          },
          {
              "_id": "62e87fbe164eb4ca925f0b41",
              "seq": 5,
              "title": "Ofertas Wao",
              "link": "/home/offers",
              "icon": "faFireAlt",
              "parent": 10,
              "roles": [
                  "gadmin",
                  "gmktgsup",
                  "gvtassup"
              ],
              "created_at": "2022-08-02T01:37:02.868Z",
              "updatedAt": "2022-08-02T01:37:02.868Z",
              "__v": 0
          },
          {
              "_id": "62e87fd2164eb4ca925f0b43",
              "seq": 6,
              "title": "Listar Usuarios SIP",
              "link": "/sip/listarUsuarios",
              "icon": "faUsers",
              "parent": 11,
              "roles": [
                  "gadmin"
              ],
              "created_at": "2022-08-02T01:37:22.029Z",
              "updatedAt": "2022-08-02T01:37:22.029Z",
              "__v": 0
          },
          {
              "_id": "62e87fe2164eb4ca925f0b45",
              "seq": 7,
              "title": "Crear Usuario SIP",
              "link": "/sip/crearUsuarios",
              "icon": "faUserPlus",
              "parent": 11,
              "roles": [
                  "gadmin"
              ],
              "created_at": "2022-08-02T01:37:38.561Z",
              "updatedAt": "2022-08-02T01:37:38.561Z",
              "__v": 0
          },
          {
              "_id": "62e87ff2164eb4ca925f0b47",
              "seq": 8,
              "title": "Listar Gerentes Zona SIP",
              "link": "/sip/listarGerentesZona",
              "icon": "faUsers",
              "parent": 11,
              "roles": [
                  "gadmin"
              ],
              "created_at": "2022-08-02T01:37:54.189Z",
              "updatedAt": "2022-08-02T01:37:54.189Z",
              "__v": 0
          },
          {
              "_id": "62e88003164eb4ca925f0b49",
              "seq": 9,
              "title": "Crear Gerente Zona SIP",
              "link": "/sip/crearGerenteZona",
              "icon": "faUserPlus",
              "parent": 11,
              "roles": [
                  "gadmin"
              ],
              "created_at": "2022-08-02T01:38:11.659Z",
              "updatedAt": "2022-08-02T01:38:11.659Z",
              "__v": 0
          }
      ]
    }
  
    httpClientSpy.get.and.returnValue(of(mockExpectResult));

    service.getSubMenu().subscribe(resultado => {
      expect(resultado).toEqual(mockExpectResult);
      done();
    });


  });

});
