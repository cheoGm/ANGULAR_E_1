import { Injectable } from '@angular/core';
import {SnippetsMock} from './SnippetsMock';
import { Snippet } from './Snippet';

@Injectable()
export class SnippetsService {

  private snipData : SnippetsMock = new SnippetsMock();

  constructor() { }

  public  showSnippets() {
    return this.snipData.snippets;
  }

  public addSnippet(snippet : Snippet){
    this.snipData.snippets.push(snippet);
  }

}
