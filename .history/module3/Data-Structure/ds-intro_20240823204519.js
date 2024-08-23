//Working with arrays in JavaScript

// The forEach() method
const fruits = ['kiwi','mango','apple','pear'];
function appIndex(fruit , index) {
    console.log(`Index of ${fruit}${index}`);
}
fruits.forEach(appIndex);