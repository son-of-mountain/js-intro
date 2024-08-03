function addTwoNames(a, b) {
    try{
        if(typeof a != 'string')
            throw new ReferenceError("the first argument is not a string");
        else if(typeof b != 'number')
            throw new ReferenceError("the second argument is not a number");
        else 
            console.log(a + b);
    }
catch(err){
    console.log("Error!" , err);
}
}

addTwoNums("5", "10"); // Output: 15
console.log("It still works");