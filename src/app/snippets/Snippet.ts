import { User } from "../users/model/User";

export class Snippet{
    public title : String;
    public description : String;
    public code : String;
    public tag : String;
    public Owner : User;
    public _id: number;


    constructor(title : String,
                description : String,
                code : String) {
        this.title  = title;
        this.description = description;
        this.code = code;   
    }

}