import { Injectable } from '@angular/core';

import {UserMock} from './UsersMock';

import {User} from './User'

@Injectable()
export class UserService {

  private usersData : UserMock = new UserMock();

  constructor() { }

  public  showUsers() {
    return this.usersData.users;
  }

  public addUser(newUser : User){
    this.usersData.users.push(newUser);
  }

}
