import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { FullLayoutComponent } from './full-layout/full-layout.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FullLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [
    FullLayoutComponent,
  ]
})
export class LayoutModule { }
