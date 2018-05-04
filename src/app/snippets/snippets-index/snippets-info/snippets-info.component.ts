import { Component, OnInit, Input } from '@angular/core';
import { Snippet } from '../../Snippet';

@Component({
  selector: 'app-snippets-info',
  templateUrl: './snippets-info.component.html',
  styleUrls: ['./snippets-info.component.css']
})
export class SnippetsInfoComponent implements OnInit {

  @Input()
  public snippet :Snippet;

  constructor() { }

  ngOnInit() {
  }

}
