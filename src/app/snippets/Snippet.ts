export class Snippet{
    public title : String;
    public description : String;
    public code : String;
    public tag : String;
    public _id: number;

    constructor(title : String,
                description : String,
                code : String,
                tag : String,_id:number) {
        this.title  = title;
        this.description = description;
        this.code = code;
        this.tag = tag; 
        this._id = _id;     
    }

}