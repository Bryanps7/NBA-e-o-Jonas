import Cubo from "./model/Cubo.js"
import Esfera from "./model/Esfera.js"
import Cilindro from "./model/Cilindro.js"

let aresta = 7

const cubo = new Cubo(aresta)

let volumeCub = cubo.calcularVolume()
let areaTotalCub = cubo.calcularAreaTotal()

console.log("> Volume Cubo: ",volumeCub)
console.log("> Área Total Cubo: ",areaTotalCub)

console.log("======================")

let raio = 4

const esfera = new Esfera(raio)

let volumeEsf = esfera.calcularVolume()
let areaTotalEsf = esfera.calcularAreaTotal()

console.log('> Volume Esfera: ',volumeEsf.toFixed(2));
console.log('> Área Total Esfera: ',areaTotalEsf.toFixed(2));

console.log("======================")

let raioC = 4
let altura = 5

const cilindro = new Cilindro(raioC, altura)

let volumeCil = cilindro.calcularVolume()
let areaTotalCil = cilindro.calcularAreaTotal()

console.log('> Volume Cilindro: ',volumeCil.toFixed(2));
console.log('> Área Total Cilindro: ',areaTotalCil.toFixed(2));