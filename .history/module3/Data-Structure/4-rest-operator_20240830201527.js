let top8 = [
    "Paris",
    "Berlin",
    "London",
    "Madrid",
    "Rome",
    "Tokyo",
    "Sydney",
    "Bangkok"
]


const [] = top8
const [firstCity, secondCity, thirdCity, ...restOfTheTrip] = top8

console.log(`The first city of the trip is: ${firstCity}`)

// This is what we call the rest operator 
// Where you can basically destructure the trip(array in this case)

console.log(`Cities I dont have money for atm (:`, restOfTheTrip)

var haveNoMoneyForCities = new Map();
for(var i in restOfTheTrip) {
    haveNoMoneyForCities.set(i,restOfTheTrip[i]);
}
console.log(haveNoMoneyForCities)

// Using the map() with REST
var result = function addTag(...restOfTheTrip){
    return restOfTheTrip.map(hehe => hehe+"X");
}

console.log(result(...restOfTheTrip))

