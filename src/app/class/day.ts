export class Day {
    id:number;
    day:string;
    celsius:number;
    constructor(values: Object = {}) {

        Object.assign(this, values);
    }
}
