import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnippetsRoutingModule } from './snippets-routing.module';
import { SnippetsService } from './snippets.service';
import { SnippetsIndexComponent } from './snippets-index/snippets-index.component';
import { SnippetsAddComponent } from './snippets-index/snippets-add/snippets-add.component'
import { SnippetsListComponent } from './snippets-index/snippets-list/snippets-list.component';
import { SnippetsInfoComponent } from './snippets-index/snippets-info/snippets-info.component';

@NgModule({
  imports: [
    CommonModule,
    SnippetsRoutingModule
  ],
  providers:[SnippetsService],
  declarations: [SnippetsIndexComponent,SnippetsAddComponent,SnippetsListComponent,SnippetsInfoComponent]
})
export class SnippetsModule { }
