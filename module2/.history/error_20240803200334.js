try{
    console.log(a+b) ;
    throw new Error();

}
catch(e){

    // console.log(e); // THIS LINE PRINTS ERROR AND ITS TYPE
    console.log("Stop this mess please");
}

console.log("Im alive");
