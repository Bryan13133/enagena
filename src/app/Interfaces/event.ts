export class Event {
    id:number
    tittle: string;
    start: string;
    end: string;
    constructor(values: any ={}){
        Object.assign(this,values);
    }
}
