function carMaker(carName){

    return{
        speed : 300,
        color : '#ffffff',
        makeSound : function(){
            console.log(`${carName} is making a sound`);
        },
        change
    }
}
console.log(carMaker('citroen')); 
