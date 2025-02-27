// edc
export default class Cylinder {
    constructor (radius,height){
        this.radius = radius
        this.height = height
    }
    
    calculateVolume(){
       return Math.PI * this.radius ** 2 * this.height 
    }

    calculatetotalArea(){
        return (2 * Math.PI * this.radius * this.height) + (2 * Math.PI * this.radius * this.radius)
    }

}