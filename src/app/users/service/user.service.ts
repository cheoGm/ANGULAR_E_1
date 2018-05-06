import { Injectable } from '@angular/core';

import {UserMock} from '../UsersMock';

import {User} from '../model/User'
import { DataService } from '../../share/data.service';

@Injectable()
export class UserService {

  private usersData : UserMock = new UserMock();

  constructor(public dataService:DataService) { }

  public  showUsers() {
    return this.dataService.getAll('/api/users');
  }

  public editUser(user : User){
    return this.dataService.put('/api/users/'+user._id,{'user':user});
  }

  public addUser(newUser : User){
    console.log(newUser);
    this.dataService.post('/api/users',{user:newUser});
  }

  public removeUser(user:User){
    return this.dataService.delete('/api/users/'+user._id);
  }

}
