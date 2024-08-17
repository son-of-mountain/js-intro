// TODO: continue in the 7th question in https://www.coursera.org/learn/programming-with-javascript/supplement/zHnwP/designing-an-oo-program

// FIRST: create the Animal class
class Animal{
    constructor(color,energy){
        this.color = color;
        this.energy = energy;
    }
    isActive(){
        if(this.energy > 0){
            this.energy -= 20 ;
            console.log('Energy is decreasing , its currently at : '+this.energy)
        }
        else if(this.energy == 0)
            this.sleep();
    }
    sleep() {
        this.energy += 20;
        console.log('Energy is increasing, currently at:', this.energy)
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
    constructor(color, energy, sound = 'chirp', canFly){
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
    constructor(color, energy, sound, canJumpHigh, canClimTrees, houseCatSound="meow" ){
        super(color, energy, sound, canJumpHigh, canClimTrees);
        this.houseCatSound  = houseCatSound;
    }
    makeSound(option=true){
        if(option)
            super.makeSound();
        console.log(this.houseCatSound,option);
    }
}

// the Tiger class that extends Cat
class Tiger extends Cat{
    constructor(color, energy, sound, canJumpHigh, canClimTrees, tigerSound = "Roar!"){
        super(color, energy, sound, canJumpHigh, canClimTrees);
        this.tigerSound  = tigerSound;
    }
    makeSound(option=true){
        if(option)
            super.makeSound();
        console.log(this.houseCatSound);    
    }
}

// The Parrot class that extends Bird
class Parrot extends Bird{
    constructor(color, energy, sound, canFly,canTalk){
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
        this.canTalk = canTalk;
    }
    makeSound(option){
        if(option)
            super.makeSound();
        if(this.canTalk)
            console.log("The parrot is talking");
        
    }
}

var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk
var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk

polly.makeSound(); // 'chirp', 'I'm a talking parrot!'
fiji.makeSound(); // 'chirp'
