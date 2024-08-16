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
    
}