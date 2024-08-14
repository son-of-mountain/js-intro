// you can actually costum your own constructor function
function Car(couleur){
    this.couleur = couleur;
    this.vitesse = 0;
    this.accelerer = function(vitesse){
        this.vitesse += vitesse;
    };
    this.freiner = function(vitesse){
        this.vitesse -= vitesse;
    };
    this.getVitesse = function(){
        return this.vitesse;
    };
}