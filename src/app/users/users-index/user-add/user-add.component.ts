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
  user : User = new User("","");
  private pattern :string = '^[A-Z]';
  constructor() {}

  ngOnInit() {}

  onSubmit(userForm){
    console.log("sending....");
    console.log(this.user);
    this.addUser.emit(this.user);
    this.user = new User("","");
  }

  clearForm(){
    this.user = null;
    this.addUser.emit(this.user);
  }

}
