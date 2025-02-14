import Esfera from "../model/Esfera.js"

describe ("teste de classe Esfera", ()=>{
    test("Testando o Volume da Esfera", ()=>{
        const raio = 11
        const esfera = new Esfera(raio)
        const VolumeEsperado  = 5575.28

        expect(esfera.CalcularVolume()).toBeCloseTo(VolumeEsperado,2)
    })
    test("Testando o cálculo da área total", ()=>{
        const raio = 11
        const esfera = new Esfera(raio)
        const AreaTotalEsperada = 1519.76

        expect(esfera.CalcularAreaTotal()).toBeCloseTo(AreaTotalEsperada,2)
    })
})