/*
    You can PASS CLASSES as parameters in the constructors 
*/
// r
// lets refactor the train class
class Train{
    constructor(color,lightsOn,numberWagons){
        this.color = color;
        this.lightsOn = lightsOn;
        this.numberWagons = numberWagons;
    }
    toggleLights(){
        this.lightsOn =!this.lightsOn;
    }
    lightStatus(){
        console.log(`Lights on ? : ${this.lightsOn}`);
    }
    getSelf() { console.log(this)}
    getPrototype() { 
        var p = Object.getPrototypeOf(this);
        console.log(p);}

}
var atlas = new Train("Orange",true,25);
// lets print the prototype of the 'atlas' train
atlas.getPrototype();

//lets define a function to use
class Country{
    constructor(name){
        this.name = name;
    }
    getName(){ return this.name; }
}

/// lets extend the class
class TGV extends Train{
    constructor(color,lightsOn,numberWagons,country){
        super(color,lightsOn,numberWagons);
        this.country = new Country(country);
    }
    getSelf() { console.log(this);
        console.log("Im a TGV btw :) from ",this.country.getName());
    }

}

// lets create a TGV and print its prototype
var mar = new Country("Morocco");
var Alboraq = new TGV("dark", true, 8, mar)
Alboraq.getSelf()