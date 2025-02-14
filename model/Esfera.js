export default class Esfera{
    constructor(raio){
        this.raio = raio
    }
    calcularVolume(){
        return (4 * Math.PI * this.raio * this.raio * this.raio) / 3
    }

    calcularAreaTotal(){
        return 4 * Math.PI * this.raio * this.raio
    }
}