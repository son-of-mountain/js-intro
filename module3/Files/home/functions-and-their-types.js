// lets try something crazy 


function getNum(){
    return Math.floor(Math.random()*10);

}
function addNums(getNum , getNum){
    console.log( getNum() + getNum());
}

addNums(getNum, getNum); // calling the function with two different anonymous functions