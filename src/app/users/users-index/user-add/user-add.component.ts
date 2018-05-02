import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { User } from '../../model/User';



@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  @Output() 
  addUser = new EventEmitter<User>();
  @Input()
  user : User = null;

  constructor() {}

  ngOnInit() {}

  onSubmit(userForm){
    console.log("sending....");
    console.log(this.user);
    this.addUser.emit(this.user);
  }

  clearForm(){
    this.user = new User("","",-1);
  }

}
