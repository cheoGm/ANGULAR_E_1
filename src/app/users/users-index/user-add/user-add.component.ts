import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { User } from '../User';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  constructor(private userService:UserService) {

  }

  ngOnInit() {

  }

  public addUser(){
    this.userService.addUser(new User('new name','new lastname'));
  }

}
