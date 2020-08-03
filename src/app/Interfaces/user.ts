export class User{
    role: string;
    name: string;
    lastName: string;
    email:string;
    password:string;
    
    constructor(values: any ={}){
        Object.assign(this,values);
    }
}