import { Injectable } from '@angular/core';
import {SnippetsMock} from './SnippetsMock';
import { Snippet } from './model/Snippet';

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

  public editUser(snippet : Snippet){
    for(var i = 0;i < this.snipData.snippets.length;i++){
      console.log(this.snipData.snippets[i]._id+ "=="+ snippet._id);
         if(this.snipData.snippets[i]._id == snippet._id){
           this.snipData.snippets[i].code = snippet.code;
           this.snipData.snippets[i].description = snippet.code;
           this.snipData.snippets[i].tag = snippet.tag;
           this.snipData.snippets[i].title = snippet.title;
           break;
         }
       }
  }

}
