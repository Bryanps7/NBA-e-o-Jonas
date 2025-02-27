export default class Cone{
    
    constructor(radius, height){
        this.radius = radius
        this.height = height
    }

    calculateGeneratrix(){
        return Math.sqrt(this.radius** 2 + this.height** 2)
    }

    calculateTotalArea(){
        return Math.PI * this.radius * (this.calculateGeneratrix + this.radius)
    }

    calculateVolume(){
        return 1/3 * (Math.PI * this.radius** 2 * this.height)
    }
}