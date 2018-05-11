import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  @Input()
  public snippet : Snippet = new Snippet("","","");

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initFoorm();
  }

  public onSubmit(){
    console.log("submit....");
    console.log(this.snippetForm.value);
    this.addSnippet.emit(this.snippetForm.value);
    this.initFoorm();

  }

  private initFoorm(){
      this.snippetForm = this.formBuilder.group({
          title: new FormControl(this.snippet.title||'snippet title',[Validators.required]),
          description: new FormControl(this.snippet.description||'description',[Validators.required]),
          tag: new FormControl(this.snippet.tag||'Java/c++/javascript',[Validators.required]),
          code: new FormControl(this.snippet.code||'class....',[Validators.required]),
          _id: new FormControl(this.snippet._id)
      });

  }

}
