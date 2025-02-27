// edc
export default class Cylinder {
    constructor (area,height){
        this.area = area
        this.height = height
    }
    
    calculateVolume(){
       return Math.PI * this.area ** 2 * this.height 
    }

    calculatetotalArea(){
        return (2 * Math.PI * this.area * this.height) + (2 * Math.PI * this.area * this.area)
    }

}