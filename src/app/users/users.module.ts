import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';


import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './users-index/user-list/user-list.component';
import { UserAddComponent } from './users-index/user-add/user-add.component';

import { UserService } from './service/user.service';
import { UserInfoComponent } from './users-index/user-info/user-info.component';
import { UsersIndexComponent } from './users-index/users-index.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ValidatePatternDirective } from '../share/validate-pattern.directive';


@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ],
  declarations: [
    UserListComponent, 
    UserAddComponent, 
    UserInfoComponent, 
    UsersIndexComponent,
    ValidatePatternDirective
   ],
  providers:[UserService]
})
export class UsersModule {

  
  
}
