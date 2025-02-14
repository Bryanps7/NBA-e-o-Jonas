import Cilindro from "... /model/Cilindro.js"

describe("Teste da classe Cilindro", ()=>{
    test("Teste da área total do cilindro", ()=>{
        const raio = 34
        const altura = 21

        areaTotalEsperada = (2 * Math.PI * this.raio * this.altura) + (2 * Math.PI * this.raio**2)

        const cilindro = new Cilindro(raio, altura)
        
        expect(cilindro.calcularAreaTotal()).toBeCloseTo(areaTotalEsperada,2)
    })

    test("Teste do volume do cilindro", ()=>{
        const raio = 34
        const altura = 21

        const cilindro = new Cilindro(raio, altura)

        areaTotalEsperada = Math.PI * this.raio ** 2 * this.altura

        expect(cilindro.calcularVolume()).toBeCloseTo(areaTotalEsperada,2)
    })
})