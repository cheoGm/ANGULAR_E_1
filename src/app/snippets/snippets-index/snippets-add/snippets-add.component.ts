import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Snippet } from '../../model/Snippet';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-snippets-add',
  templateUrl: './snippets-add.component.html',
  styleUrls: ['./snippets-add.component.css']
})
export class SnippetsAddComponent implements OnInit {

  @Output()
  addSnippet = new EventEmitter<any>();
  private snippetToAdd : Snippet = new Snippet("","","");
  public snippetForm :FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initFoorm();
  }

  public onSubmit(){
    console.log("submit....");
    console.log(this.snippetForm.value);
    this.addSnippet.emit(this.snippetForm.value);
  }

  private initFoorm(){
      this.snippetForm = this.formBuilder.group({
          title: new FormControl('snippet name',[Validators.required]),
          description: new FormControl('description',[Validators.required]),
          tag: new FormControl('Java/c++/javascript',[Validators.required]),
          code: new FormControl('class....',[Validators.required])
      });
  }

}
