export class Tarjeta {
    id:number;
    empresa:string;
    numTarjeta:string;
    fecha:string;
    constructor(values: Object = {}) {

        Object.assign(this, values);
    }
}
