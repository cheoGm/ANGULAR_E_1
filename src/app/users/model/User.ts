export class User{
    public  name: String ;
    public  lastName: String;
    public _id : number;

    constructor(name: String,lastName:String,id:number) {
        this.name = name;
        this.lastName = lastName;
        this._id = id;
    }

};