import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { AvatarModule } from 'ngx-avatars';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FullLayoutComponent,
  ],
  imports: [
    CommonModule,
    AvatarModule,
    FontAwesomeModule,
    DirectivesModule,
    RouterModule.forChild([])
  ],
  exports: [
    FullLayoutComponent,
  ]
})
export class LayoutModule { }
