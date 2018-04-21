import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnippetsRoutingModule } from './snippets-routing.module';
import { SnippetsListComponent } from './snippets-list/snippets-list.component';
import { SnippetsAddComponent } from './snippets-add/snippets-add.component';
import { SnippetsService } from './snippets.service';
import { SnippetsInfoComponent } from './snippets-info/snippets-info.component';

@NgModule({
  imports: [
    CommonModule,
    SnippetsRoutingModule
  ],
  providers:[SnippetsService],
  declarations: [SnippetsListComponent, SnippetsAddComponent, SnippetsInfoComponent]
})
export class SnippetsModule { }
