import { Component, OnInit } from '@angular/core';
import { SnippetsService } from '../snippets.service';
import { Snippet } from '../Snippet';

@Component({
  selector: 'app-snippets-index',
  templateUrl: './snippets-index.component.html',
  styleUrls: ['./snippets-index.component.css']
})
export class SnippetsIndexComponent implements OnInit {

  public isSelected = false;
private snippetsToUpdate : Snippet = {title : "",description : "",code : "",tag : "",_id: -1,Owner:{name:"",lastName:"",_id:""}};

  constructor(private snippetsService : SnippetsService) {}

  ngOnInit() {
  }

  add(){
    this.isSelected = false;
  }

  list(){
    this.isSelected = true;
  }

  public getUsers(){
    return this.snippetsService.showSnippets();
  }

  public snippToUpdate(snippet :Snippet){
    return this.updateSnippet;
  }

  public updateSnippet(snippet : Snippet){
        this.snippetsToUpdate = Object.assign({},snippet);
  }

  public addSnippet(snippet:Snippet){
    console.log("adding"+ snippet);
    if(snippet != null && snippet._id < 0){
    this.snippetsService.addSnippet(snippet);
    }else{
      this.snippetsService.editUser(snippet);
    }
    this.snippetsToUpdate =  new Snippet("","",""); }


}
