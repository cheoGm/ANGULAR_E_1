import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SnippetsIndexComponent } from './snippets-index/snippets-index.component'

const routes: Routes = [
{
  path:'',
  component:SnippetsIndexComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SnippetsRoutingModule { }
