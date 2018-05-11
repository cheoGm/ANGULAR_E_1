import { Component, OnInit } from '@angular/core';
import { Snippet } from '../model/Snippet';
import { SnippetsService } from '../service/snippets.service';

@Component({
  selector: 'app-snippets-index',
  templateUrl: './snippets-index.component.html',
  styleUrls: ['./snippets-index.component.css']
})
export class SnippetsIndexComponent implements OnInit {
  private snippets : Snippet[];
  public isSelected = false;
  private snippetsToUpdate : Snippet = new Snippet("","","");

  constructor(private snippetsService : SnippetsService) {}

  ngOnInit() {
  }

  add(){
    this.isSelected = false;
  }

  list(){
    this.isSelected = true;
    this.getSnippets();
  }

  public getSnippets(){
    this.snippetsService.showSnippets().then((data : any) => {
      console.log('data',data);
      this.snippets = data.snippet;
    });
  }

  public snippetToUse(){
    return this.snippetsToUpdate;
  }

  public snippToUpdate(snippet :Snippet){
    console.log(snippet);
    this.snippetsToUpdate = Object.assign({},snippet);
    this.add();
  }

  public updateSnippet(snippet : Snippet){
        this.snippetsToUpdate = Object.assign({},snippet);
  }

  public addSnippet(snippet:Snippet){
    if(snippet && !snippet._id){
      console.log("adding..."+ snippet.title);
      this.snippetsService.addSnippet(snippet);
    }else if(snippet){
      console.log("editting....");
      this.snippetsService.editSnippet(snippet);
    }
    this.snippetsToUpdate =  new Snippet("","",""); 
  }

  public snippetToDelete(snippet : Snippet){
    console.log(".........");
    this.snippetsService.removeSnippet(snippet);
    this.getSnippets();
    this.snippetsToUpdate =  new Snippet("","","");
  }

}
