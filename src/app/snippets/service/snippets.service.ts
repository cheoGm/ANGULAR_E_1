import { Injectable } from '@angular/core';
import { Snippet } from '../model/Snippet';
import { DataService } from '../../share/data.service';


@Injectable()
export class SnippetsService {

  constructor(public dataService:DataService) { }

  public showSnippets() {
    return this.dataService.getAll('api/snippet');
  }

  public addSnippet(snippet : Snippet){
    this.dataService.post('api/snippet',snippet);
  }

  public editSnippet(snippet : Snippet){
   console.log("snippet edit service");
   this.dataService.put('/api/snippet/'+snippet._id,snippet);
  }

  public removeSnippet(snippet: Snippet){
    console.log(snippet);
    return this.dataService.delete('/api/snippet/'+snippet._id);
  }

}
