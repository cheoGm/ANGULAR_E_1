import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { User } from '../../model/User'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input()
  users : User[];

  @Output()
  userToEdit = new EventEmitter<User>();

  @Output()
  userToDelete = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }

  public setEditUser(user : User){
    this.userToEdit.emit(user);
  }

  public deleteUser(user:User){
    console.log("deleteing.....");
    this.userToDelete.emit(user);
  }

}