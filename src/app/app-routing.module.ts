import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'Users',
    loadChildren: 'app/users/users.module#UsersModule'
  },
  {
    path: 'Groups',
    loadChildren: 'app/groups/groups.module#GroupsModule' 
  }
  ,
  {
    path: 'Snippets',
    loadChildren: 'app/snippets/snippets.module#SnippetsModule' 
  }
  ,
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }