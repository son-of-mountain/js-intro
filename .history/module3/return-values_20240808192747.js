function carMaker(carName){

    return{
        speed : 300,
        color : '#ffffff',
        makeSound : function(){
            console.log(`${carName} is making a sound`);
        },
        changeColor : function(ncol){
            console.log(`${carName} is changing color from ${ncol} to ${`)
        }
    }
}
console.log(carMaker('citroen')); 
