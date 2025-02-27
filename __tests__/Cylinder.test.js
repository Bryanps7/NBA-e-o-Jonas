import Cylinder from "../model/Cylinder.js"

describe("testing class Cylinder", ()=>{
    Test("testing the calculate volume", ()=>{
        const radius =  2
        const height = 3
        const volumeEsperado = Math.PI * raio * raio * altura // 37,6991124 ou 37,70

        const cylinder = new Cylinder(radius,height)

        expect(cylinder.calculateVolume()).toBeCloseTo(volumeEsperado,2)



    })

    test("testing the  calculate total Area", ()=>{
        const radius = 2
        const height = 3
        const areaEsperada =  (2 * Math.PI * radius * height) + 
        (2 * Math.PI * (radius * radius))  // 62,831854 ou 62,83
    const cylinder = new Cylinder(radius,height)
    
    expect(cylinder.calculatetotalArea()).toBeCloseTo(areaEsperada,2)
    
    })
})

