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

var haveNoMoneyForCities = new Ma