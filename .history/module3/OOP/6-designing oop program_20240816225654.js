// FIRST: create the Animal class
class Animal{
    constructor(color,energy){
        this.color = color;
        this.energy = energy;
    }
    isActive(){
        this.energy = !energy;
        console.log("This is the current energy ",this.energy);
    }
    sleep(){
        if(!this.energy)
            console.log("The animal is sleeping");
    }
    getColor(){
        console.log("This is the current color",this.color);
    }

}

// SECOND: create the Cat class that extends Animal
class Cat extends Animal{
    constructor(color,energy,sound,canJumpHigh,canClimTrees){
        super(color, energy);
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canClimTrees = canClimTrees;
    }
    makeSound(){
        console.log(this.sound);
    }
}

// THIRD: create the Bird class that extends Animal
class Bird extends Animal{
    constructor(color, energy, sound, canFly){
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound(){
        console.log(this.sound);
    }
}

// The houseCat class
class HouseCat extends Cat{
    constructor(color, energy, sound, canJumpHigh, canClimTrees, houseCatSound ){
        super(color, energy, sound, canJumpHigh, canClimTrees);
        this.houseCatSound  = houseCatSound;
    }
    makeSound(true){
        
    }
}
// var houseCatSound = "MeoMouaad"
// var HouseCat = new Cat()
