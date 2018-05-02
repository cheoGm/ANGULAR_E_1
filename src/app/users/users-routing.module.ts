import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {} from ''
import { UserAddComponent } from './users-index/user-add/user-add.component';
import { UserListComponent } from './users-index/user-list/user-list.component';
import { UsersIndexComponent } from './users-index/users-index.component';

const routes: Routes = [
  {
    path: '',
    component: UsersIndexComponent
  }
 

]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
