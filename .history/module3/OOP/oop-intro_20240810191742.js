var user = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
    changeName: function(newname) {
        this.name= newname;
        console.log("wow my name is now :", this.name);    
    }
    changeIdentity: function(new) {
        
    }
}

user.changeName('Fatiha');