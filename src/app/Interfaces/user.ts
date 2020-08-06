export class User{
    role: string;
    name: string;
    lastname: string;
    email:string;
    password:string;
    
    constructor(values: any ={}){
        Object.assign(this,values);
    }
}