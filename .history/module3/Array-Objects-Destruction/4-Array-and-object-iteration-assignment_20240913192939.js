// Task 1
var dairy = [
    {   name:'cheese',
        price: 100},
        'sour cream',
         'milk',
        'yogurt',
         'ice cream',
          'milkshake']
function logDairy() {
    for (var item of dairy)
        console.log(item);
}
logDairy()
// Task 2

const animal = {
    canJump: true,
}
const bird = Object.create(animal)
bird.canFly = true
bird.hasFeathers = true

function birdCan(){
    for(var prop of Object.keys(bird)){
        console.log(prop+": "+bird[prop])
    }
}

// Task 3
// now lets print the prototype 
function birdCan(){
    for(var prop of Object.keys(bird)){
        console.log(prop+": "+bird[prop])
    }
}

