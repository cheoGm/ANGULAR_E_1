import { Component, OnInit } from '@angular/core';
import { SnippetsService } from '../../snippets.service';
import { Snippet } from '../../Snippet';

@Component({
  selector: 'app-snippets-add',
  templateUrl: './snippets-add.component.html',
  styleUrls: ['./snippets-add.component.css']
})
export class SnippetsAddComponent implements OnInit {

  constructor(private snippetsService : SnippetsService) { }

  ngOnInit() {
  }

  public addNewSnippet(){
      this.snippetsService.addSnippet(
        new Snippet("title", "description", "code"));
  }

}
