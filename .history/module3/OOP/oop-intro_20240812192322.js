class User{
    constructor(name,age,city){
        this.name = name;
        this.age = age;
        this.city = city;
    }
    changeName(newname) {
        this.name= newname;
        console.log("wow my name is now :", this.name);    
    },
    changeIdentity(newCity){
        this.city= newCity;
        console.log("wow my current city is now :", this.city);     
    }
}

// user.changeName('Fatiha');
// user.changeIdentity('Fes');
// console.log(user)

const mouaad = new User('Mouaad',28,'Houara');
console.log(mouaad)