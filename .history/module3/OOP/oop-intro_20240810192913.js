var user = {
    constructo(name,age,city){
        this.name = name;
        this.age = age;
        this.city = city;
    }
    name: 'John Doe',
    age: 30,
    city: 'New York',
    changeName: function(newname) {
        this.name= newname;
        console.log("wow my name is now :", this.name);    
    },
    changeIdentity: function(newCity) {
        this.city= newCity;
        console.log("wow my current city is now :", this.city);     
    }
}

user.changeName('Fatiha');
user.changeIdentity('Fes');
console.log(user)

var 