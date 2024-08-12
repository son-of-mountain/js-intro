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
}
class BidoAinSaiss extends AinSaiss{
    mySize(){
        super.mySize();  // calling the parent method
        console.log("and i am bido ain saiss")
    }
}

let bido = new BidoAinSaiss();
bido.mySize();