import { Injectable } from '@angular/core';

import {UserMock} from '../UsersMock';

import {User} from '../model/User'

@Injectable()
export class UserService {

  private usersData : UserMock = new UserMock();

  constructor() { }

  public  showUsers() {
    return this.usersData.users;
  }

  public editUser(user : User){
    for(var i = 0;i < this.usersData.users.length;i++){
      console.log(this.usersData.users[i]._id+ "=="+ user._id);
         if(this.usersData.users[i]._id == user._id){
           this.usersData.users[i].name = user.name;
           this.usersData.users[i].lastName = user.lastName;
           break;
         }
       }
  }

  public addUser(newUser : User){
    console.log("adding user");
    this.usersData.users.push(newUser);
  }

  public removeUser(user:User){
    console.log("......");
   
     var index;
     for(var i = 0;i < this.usersData.users.length;i++){
       console.log(this.usersData.users[i]._id+ "=="+ user._id);
          if(this.usersData.users[i]._id == user._id){
            this.usersData.users.splice(i,1);
            break;
          }
          
        }
  }

}
