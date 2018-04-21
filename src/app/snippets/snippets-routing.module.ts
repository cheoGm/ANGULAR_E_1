import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SnippetsListComponent } from './snippets-list/snippets-list.component';
import { SnippetsAddComponent } from './snippets-add/snippets-add.component';


const routes: Routes = [
{
  path:'list',
  component:SnippetsListComponent
},
{
  path:'add',
  component:SnippetsAddComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SnippetsRoutingModule { }
