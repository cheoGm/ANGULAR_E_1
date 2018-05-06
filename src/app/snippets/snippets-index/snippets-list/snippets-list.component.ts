import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { SnippetsService } from '../../snippets.service';
import { Snippet } from '../../model/Snippet';

@Component({
  selector: 'app-snippets-list',
  templateUrl: './snippets-list.component.html',
  styleUrls: ['./snippets-list.component.css']
})
export class SnippetsListComponent implements OnInit {

  @Input()
  snippets :  Snippet[];

  @Output()
  snippetToEdit = new EventEmitter<Snippet>();

  @Output()
  snippetToDelete = new EventEmitter<Snippet>();

  constructor() { }

  ngOnInit() {
  }

  public setEditUser(snippet : Snippet){
    this.snippetToEdit.emit(snippet);
  }

  public deleteUser(snippet:Snippet){
    console.log("deleteing.....");
    this.snippetToDelete.emit(snippet);
  }


}
