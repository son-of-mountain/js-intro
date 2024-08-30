// join arrays and objects using the rest operator 
let cities = [ 'New York', 'Paris', 'London']
let countries = [ 'USA', 'FR', 'UK']
let citiesAndCountries = [ ...cities, ...countries]

console.log("now i concatenated the cities and countries , the result is : " )
console.log(citiesAndCountries)

// Add new members to arrays without using the push() method
countries = [ ...countries , 'MA','DZ']
console.log(countries)

// Convert a string to an array using the spread operator
// lets convert this date to an array

let date = "20032105"
let myarr = [...date]

let car1 = { 
    brand: 'Toyota',
    model: 'Camry',
    year: 2020
}
let car2 = {...car1, 'color:green'}
console.log(car2)
