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