// you can actually costum your own constructor function
function Car(couleur){
    this.couleur = couleur;
    this.vitesse = 200 ;
    this.accelerer = function(){
        console.log(`a 3faat am3elem had ${this.vitesse} madayra walo`)
    }    
}
// so lets define our own car
var tambil = new Car('3azzi')
tambil.accelerer()  