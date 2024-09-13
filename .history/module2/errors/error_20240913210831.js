try{
    console.log(a+b) ;
    throw new Error();
    console.log("hehe")

}
catch(e){

    console.log(e); // THIS LINE PRINTS ERROR AND ITS TYPE
    console.log("Stop this mess please");
}

console.log("Im alive");

try {
    throw new Error();
    console.log('Square');
} catch(err) {
    console.log('Circle');
}
