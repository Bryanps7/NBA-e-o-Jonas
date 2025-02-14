import Esfera from "../model/Esfera.js"

describe("teste de classe Esfera", () => {
    test("Testando o Volume da Esfera", () => {
        const raio = 11
        const esfera = new Esfera(raio)
        const volumeEsperado = (4 * Math.PI * raio ** 3) / 3

        expect(esfera.calcularVolume()).toBeCloseTo(volumeEsperado, 2)
    })
    test("Testando o cálculo da área total", () => {
        const raio = 11
        const esfera = new Esfera(raio)
        const areaTotalEsperada = 4 * Math.PI * raio ** 2

        expect(esfera.calcularAreaTotal()).toBeCloseTo(areaTotalEsperada, 2)
    })
})