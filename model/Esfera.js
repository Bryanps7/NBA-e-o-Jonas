export default class Esfera{
    constructor(raio, diametro){
        this.raio = raio
    }
    CalcularVolume(){
        return (4 * Math.PI * this.raio * this.raio * this.raio) / 3
    }

    CalcularAreaTotal(){
        return 4 * Math.PI * this.raio * this.raio
    }
}