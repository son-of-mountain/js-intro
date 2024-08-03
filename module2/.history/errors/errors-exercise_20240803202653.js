function addTwoNums(a, b) {
    try{
        if(typeof a != 'number')
            throw new Error()
        console.log(a + b);
    }
catch(err){
    console.log(err);
}
}

addTwoNums(5, "10"); // Output: 15