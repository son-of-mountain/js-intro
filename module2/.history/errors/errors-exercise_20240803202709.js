function addTwoNums(a, b) {
    try{
        if(typeof a != 'number')
            throw new ReferenceError("the first argument is not a number");
        console.log(a + b);
    }
catch(err){
    console.log(err);
}
}

addTwoNums(5, "10"); // Output: 15