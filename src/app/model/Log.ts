export class Log{
    message: string;

    constructor(message: String){
        this.message = new Date().toISOString() + " " + message;        
    }

}