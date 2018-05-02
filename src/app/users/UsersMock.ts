import { User } from './model/User'

export class UserMock{
    public users : User[] = [{
        lastName:"Gomez",
        name :"Marcelo ",
        _id:1
    },
    {
        lastName:"Marcelo",
        name :"Gomez ",
        _id:2
    }];
}