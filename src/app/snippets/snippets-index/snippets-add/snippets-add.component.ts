import { Component, OnInit } from '@angular/core';
import { SnippetsService } from '../../snippets.service';
import { Snippet } from '../../model/Snippet';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-snippets-add',
  templateUrl: './snippets-add.component.html',
  styleUrls: ['./snippets-add.component.css']
})
export class SnippetsAddComponent implements OnInit {

  private snippetToAdd : Snippet = new Snippet("","","");
  private snippetForm :FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initFoorm();
  }

  private initFoorm(){
      this.snippetForm = this.formBuilder.group({
          snipName: new FormControl('snippet name',[Validators.required]),
          snipDescription: new FormControl('description',[Validators.required]),
          snipTag: new FormControl('Java/c++/javascript',[Validators.required]),
          snipCode: new FormControl('class....',[Validators.required])
      });
  }

}
