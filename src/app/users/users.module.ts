import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';

import { UserService } from './user.service';
import { UserInfoComponent } from './user-info/user-info.component';
import { UsersIndexComponent } from './users-index/users-index.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [UserListComponent, UserAddComponent, UserInfoComponent, UsersIndexComponent],
  providers:[UserService]
})
export class UsersModule { 



  
}
