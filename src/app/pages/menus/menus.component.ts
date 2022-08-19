import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  menuResponse: any;
  menuItemsLoad: boolean = false;
  subMenuItemsLoad: boolean = false;

  constructor(private menu: MenuService)   { }

  ngOnInit(): void {
    this.menu.menu.subscribe( data => {
      this.menuResponse = data;
      this.menuItemsLoad = true;
    })
  }

}
