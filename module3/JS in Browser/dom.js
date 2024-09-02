/*
    THE dom element 
    is a an important element
    in web development, 
    as it represents the structure of a webpage.
*/

// you can actually do a lot of stuff with it
// its like a remote that can change the character inside a film

/*
    you can for example change the attributes an html tag
*/

console.log("here for instance i create and change attributes of the h2 tag using")
const myh2 = document.createElement("h2");
myh2.innerText = "this is my first h2 tag that i created using DOM"

myh2.setAttribute("id", "my-h2-id"); // changing id

myh2.setAttribute("class", "my-h2-class"); // changing class

