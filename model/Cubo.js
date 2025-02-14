export default class Cubo{


    constructor(aresta){
        this.aresta = aresta
    }

    calcularAreaTotal(){
         return 6 * (this.aresta * this.aresta )
         
    }

    calcularVolume(){
        return this.aresta * this.aresta * this.aresta
    }
}

