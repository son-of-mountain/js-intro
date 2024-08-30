//Working with arrays in JavaScript

// The forEach() method
const fruits = ['kiwi','mango','apple','pear'];
function appIndex(fruit) {
    console.log(`${fruit}`);
}
fruits.forEach(appIndex);

console.log('i can also use it like this')
fruits.forEach( function(fruit,index){
    console.log(`${index+1}. ${fruit}`);
} );

//the filter() method
const nums = [0,10,20,30,40,50];
let result = nums.filter(function(num){
    return num%4;
})
console.log(result);

//the map() method
const numss = [0,10,20,30,40,50];
let results = numss.map(function(num){
    return num+3 ;
});
let resultss = function addThree(...numss){
    return numss.map(index => index+3);
}
var result = function addTag(...restOfTheTrip){
    return restOfTheTrip.map(hehe => hehe+"X");
}

console.log(results);
console.log(resultss);
