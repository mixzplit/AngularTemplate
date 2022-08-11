import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { AvatarModule } from 'ngx-avatars';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenusComponent } from '../menus/menus.component';
import { DirectivesModule } from '../../directives/directives.module';


@NgModule({
  declarations: [
    ProfileComponent,
    MenusComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    AvatarModule,
    FontAwesomeModule,
    DirectivesModule
  ]
})
export class ProfileModule { }
