// edc
export default class Cylinder {
    constructor (raio, height){
        this.raio = raio
        this.height = height
    }
    
    calculateVolume(){
       return Math.PI * this.raio ** 2 * this.height 
    }


    calculateTotalArea(){
        return (2 * Math.PI * this.raio * this.height) + (2 * Math.PI * this.raio * this.raio)
    }

}