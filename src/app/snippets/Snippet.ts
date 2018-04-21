export class Snippet{
    public title : String;
    public description : String;
    public code : String;
    public tag : String;

    constructor(title : String,
                description : String,
                code : String,
                tag : String,) {
        this.title  = title;
        this.description = description;
        this.code = code;
        this.tag = tag;      
    }

}