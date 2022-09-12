const userInput = document.getElementById("user-input")
const convertBtn = document.getElementById("convert-btn")

const meterFeet = document.getElementById("meter-feet")
const litersGallons = document.getElementById("liters-gallons")
const kilogramsPounds = document.getElementById("kilograms-pounds")
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

convertBtn.addEventListener("click",function() {
    let input = userInput.value
    meterFeet.innerHTML = `${input} meters = ${Math.floor(input * 3281) / 1000} feet
                         | ${input} feet = ${Math.floor(input / 0.003281) / 1000} meters`

    litersGallons.innerHTML = `${input} liters = ${Math.floor(input * 264) / 1000} gallons 
                         | ${input} gallons = ${Math.floor(input / 0.000264) / 1000} liters`

    kilogramsPounds.innerHTML = `${input} kilograms = ${Math.floor(input * 2204) / 1000} pounds
                         | ${input} pounds = ${Math.floor(input / 0.002204) / 1000} kilograms`             






})

