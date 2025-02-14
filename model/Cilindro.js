//  volune: π r² h || area total: 2π r h + 2π r²

export default class Cilindro {
    constructor(raio, altura) {
        this.raio = raio
        this.altura = altura
    }

    calcularVolume() {
        return Math.PI * this.raio ** 2 * this.altura
    }

    calcularAreaTotal() {
        return (2 * Math.PI * this.raio * this.altura) + (2 * Math.PI * this.raio**2)
    }
}