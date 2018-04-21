import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsListComponent } from './groups-list/groups-list.component'

@NgModule({
  imports: [
    CommonModule,
    GroupsRoutingModule
  ],
  declarations: [GroupsListComponent]
})
export class GroupsModule { }
