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
