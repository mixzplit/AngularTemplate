import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { AvatarModule } from 'ngx-avatars';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PermissionsDirective } from '../directives/permissions.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FullLayoutComponent,
    PermissionsDirective
  ],
  imports: [
    CommonModule,
    AvatarModule,
    FontAwesomeModule,
    RouterModule.forChild([])
  ],
  exports: [
    FullLayoutComponent,
  ]
})
export class LayoutModule { }
