function addTwoNames(a, b) {
    try{
        if(typeof a != 'string')
            throw new ReferenceError("the first argument is not a string");
        else if(typeof b != 'string')
            throw new ReferenceError("the second argument is not a string");
        else 
            console.log(a + b);
    }
catch(err){
    console.log("Error!" , err);
}
}

addTwoNames("mou", "aad"); // Output: 15
addTwoNames(12, "aad"); // Output: 15
console.log("It still works");