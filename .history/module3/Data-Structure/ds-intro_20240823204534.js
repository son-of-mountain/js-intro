//Working with arrays in JavaScript

// The forEach() method
const fruits = ['kiwi','mango','apple','pear'];
function appIndex(fruit , index) {
    console.log(`${index}.${fruit}`);
}
fruits.forEach(appIndex);