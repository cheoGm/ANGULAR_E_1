import { Component, OnInit } from '@angular/core';
import { Snippet } from '../Snippet';
import { SnippetsService } from '../snippets.service';

@Component({
  selector: 'app-snippets-list',
  templateUrl: './snippets-list.component.html',
  styleUrls: ['./snippets-list.component.css']
})
export class SnippetsListComponent implements OnInit {

  snippets :  Snippet[];

  constructor(private service: SnippetsService) { }

  ngOnInit() {
    this.snippets = this.service.showSnippets();
  }

}
