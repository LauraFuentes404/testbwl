export class Venta {
    id:number;
    tipo:string;
    porcentaje:number;
    constructor(values: Object = {}) {

        Object.assign(this, values);
    }
}
