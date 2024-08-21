//TODO: finish the use of FOR EACH LOOP in the https://www.coursera.org/learn/programming-with-javascript/supplement/WbvM4/for-of-loops-and-objects

// this functions are important for objects 

const car = {
    speed :100 ,
    color : "blue"

}

console.log("lists the properties of the car")
console.log(Object.keys(car));

console.log("lists the values of the car")
console.log(Object.values(car));

console.log("lists [properties,values] of the car")
console.log(Object.entries(car));

// for(const key of Object.keys(car) ){
//     console.log(key , ":" , car[key]);  // this will throw an error because for of loop is for iterable objects
// }

console.log("printing the first value ",car[1])