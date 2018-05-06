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
  private userUpdated : User =  new User("","");
  private users : User[];
  constructor(private userService : UserService) { }

  ngOnInit() {}

  public addUser(user:User){
    console.log("adding"+ user);
    if(user && !user._id){
      this.userService.addUser(user);
    }else if(user){
      this.userService.editUser(user);
    }
    this.userUpdated =  new User("","");
  }

  public getUsers(){
    this.userService.showUsers().then((data : any) => {
      console.log('data',data);
      this.users = data.user;
    });;
  }

  public UserToEdit(){
    return this.userUpdated;
  }

  public updateUser(user : User){
    console.log(user);
    this.userUpdated = Object.assign({},user);
    this.add();
  }
  
  public userToDelete(user : User){
    console.log(".........");
    this.userService.removeUser(user);
    this.getUsers();
    this.userUpdated =  new User("","");
  }

  add(){
    this.isSelected = false;
  }

  list(){
    this.isSelected = true;
    this.getUsers();
  }
}
