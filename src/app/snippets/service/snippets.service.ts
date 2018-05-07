import { Injectable } from '@angular/core';
import { Snippet } from '../model/Snippet';
import { DataService } from '../../share/data.service';


@Injectable()
export class SnippetsService {



  constructor(public dataService:DataService) { }

  public  showSnippets() {
  }

  public addSnippet(snippet : Snippet){
    this.dataService.post('api/snippet',snippet);
  }

  public editUser(snippet : Snippet){
   
  }

}
