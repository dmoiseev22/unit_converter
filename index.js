/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("inputfield")
let btnEl = document.getElementById("btn-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

btnEl.addEventListener("click", function() {
    
    let feet = (inputEl.value * 3.281).toFixed(3)
    let meter = (inputEl.value / 3.281).toFixed(3)

    let gallons = (inputEl.value * 0.264).toFixed(3)
    let liters = (inputEl.value / 0.264).toFixed(3)

    let pounds = (inputEl.value / 2.204).toFixed(3)
    let kilos = (inputEl.value * 2.204).toFixed(3)

    lengthEl.textContent = `${inputEl.value} meters = ${feet} feet | ${inputEl.value} feet = ${meter} meters`
    volumeEl.textContent = `${inputEl.value} liters = ${gallons} gallons | ${inputEl.value} gallons = ${liters} liters`
    massEl.textContent = `${inputEl.value} kilos = ${pounds} pounds | ${inputEl.value} pounds = ${kilos} kilos`
})




