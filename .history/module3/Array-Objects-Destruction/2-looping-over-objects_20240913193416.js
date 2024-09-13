//TODO: finish the use of FOR EACH LOOP in the https://www.coursera.org/learn/programming-with-javascript/supplement/WbvM4/for-of-loops-and-objects

// this functions are important for objects 

/*
    there is a considerable difference between FOR OF and FOR IN 

    - FOR IN loops through the properties and prototypes .
  
    for(const    key    in      car ){
        
    }

    - FOR OF loops through the values only, excluding non-enumerable propertieswhi
    - For OF loops through the properties only using Object.keys()

    for(const    key    of      Object.values(car)   ){


    }

    Remember : FOR IN is more genereal than FOR OF

*/


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



for(const key in Object.values(car) ){
    if(car["speed"] == key )
        console.log("Good word you stepped on the correct value:",key);

}
