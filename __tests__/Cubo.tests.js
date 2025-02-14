import Cubo from "./model/Cubo.js"

describe("testes da classe Cubo", ()=>{
    test("teste da area total do cubo", ()=>{
        const aresta = 4
        areaTotalEsperada = 6 * (aresta * aresta)
        const cubo = new Cubo(aresta)
        expect(cubo.calcularAreaTotal()).toBeCloseTo(areaTotalEsperada,2)
    })

    test("teste do volume do cubo", ()=>{
        const aresta = 4
        volumeEsperado = aresta * aresta * aresta
        const cubo = new Cubo(aresta)

        expect(cubo.calcularVolume()).toBeCloseTo(volumeEsperado,2)
    })
})