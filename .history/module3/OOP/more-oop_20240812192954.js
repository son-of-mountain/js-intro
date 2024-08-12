class Bottle{
    mySize(){
        console.log("i am underwater")
    }
}
class AinSaiss extends Bottle{
    mySize(){
        super.mySize();  // calling the parent method
        console.log("also i am ain saiss")
    }
    myColor(){
        console.log("my color is blue")
    }
 }

class BidoAinSaiss extends AinSaiss{
    mySize(){
        super.mySize();  // calling the parent method
        console.log("and i am bido ain saiss")
    }
    myColor(){
        console.log("my color is green")
    }
}

let bido = new BidoAinSaiss();
bido.mySize();