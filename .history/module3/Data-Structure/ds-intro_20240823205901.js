//Working with arrays in JavaScript

// The forEach() method
const fruits = ['kiwi','mango','apple','pear'];
function appIndex(fruit) {
    console.log(`${fruit}`);
}
fruits.forEach(appIndex);

console.log('i can also use it like this')
fruits.forEach(function(fruit,index){
    console.log(`${index+1}. ${fruit}`);
});

//the filter() method
const nums = [0,10,20,30,40,50];
let result = nums.filter(function(num){
    return num>10;
})
console.log(result);

//the map() method

