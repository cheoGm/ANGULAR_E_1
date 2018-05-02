import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-users-index',
  templateUrl: './users-index.component.html',
  styleUrls: ['./users-index.component.css']
})
export class UsersIndexComponent implements OnInit {
  public isSelected = false;
  private userUpdated : User =  {lastName:"",name :"",_id:-1}
  constructor(private userService : UserService) { }

  ngOnInit() {

  }

  public addUser(user:User){
    console.log("adding"+ user.name);
    if(user != null && user._id < 0){
    user._id = this.userService.showUsers().length+1;
    this.userService.addUser(user);
    }else{
      this.userService.editUser(user);
    }
    this.userUpdated =  {lastName:"",name :"",_id:-1}
  }

  public getUsers(){
    return this.userService.showUsers();
  }

  public UserToEdit(){
    return this.userUpdated;
  }

  public updateUser(user : User){
    console.log(user);
    this.userUpdated = Object.assign({},user);
  }
  
  public userToDelete(user : User){
    console.log(".........")
    this.userService.removeUser(user);
    this.userUpdated =  {lastName:"",name :"",_id:-1}
  }

  add(){
    this.isSelected = false;
  }

  list(){
    this.isSelected = true;
  }
}
