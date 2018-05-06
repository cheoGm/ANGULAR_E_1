export class User{
    public  name: String ;
    public  lastName: String;
    public _id : String;

    constructor(name: String,lastName:String) {
        this.name = name;
        this.lastName = lastName;
        this._id = undefined;
    }

};