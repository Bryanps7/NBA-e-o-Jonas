import Cubo from "../model/Cubo.js"

describe("Testes da classe Cubo", ()=>{
    test("teste da área total do cubo", ()=>{
        const aresta = 4
        AreaTotalEsperada = 6 * (aresta * aresta)
        const cubo = new Cubo(aresta)

        expect(cubo.CalcularAreaTotal()).toBeCloseTo(AreaTotalEsperada,2)
    })
    test("Teste do volume do cubo", ()=>{
        const aresta = 4
        VolumeEsperado = aresta * aresta * aresta
        const cubo = new Cubo(aresta)

        expect(cubo.CalcularVolume()).toBeCloseTo(VolumeEsperado,2)
    })
})