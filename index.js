import Cylinder from './model/Cylinder.js'
import Cone from './modelo/Cone.js'

const radius = Number(document.getElementById('radius').value)
const height = Number(document.getElementById('height').value)

const bcone = document.getElementById('cone')
const bcylinder = document.getElementById('cylinder')

const display = document.getElementById('display')

const cylinder = new Cylinder(radius, height)

let cone = new Cone(radius, height)

console.log(cone.calculateVolume().toFixed(2))
console.log(cone.calculateTotalArea().toFixed(2))

bcone.addEventListener('click', ()=>{
    display.innerHTML = 'oi'
})

bcylinder.addEventListener('click', ()=>{
    
    display.innerHTML = "OI"

})