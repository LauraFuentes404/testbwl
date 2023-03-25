export class Actividad {
    id:number;
    actividad:string;
    hora:string;
    fecha:string;
    constructor(values: Object = {}) {

        Object.assign(this, values);
    }
}
