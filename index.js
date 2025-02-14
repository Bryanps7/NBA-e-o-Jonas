import Cubo from "./model/Cubo.js"

let aresta1 = 7

const cubo1 = new Cubo(aresta1)

let areaTotal = cubo1.calcularAreaTotal()
let volume = cubo1.calcularVolume()

console.log("A area total do cubo 1 é:", areaTotal)
console.log("o volume do cubo 1 é:", volume)

console.log("======================")

let aresta2 = 8
const cubo2 = new Cubo(aresta2)

areaTotal = cubo2.calcularAreaTotal()
volume = cubo2.calcularVolume()

console.log("A area total do cubo 1 é:", areaTotal)
console.log("o volume do cubo 1 é:", volume)