let top3 = [
    "Paris",
    "Berlin",
    "London"
]
function tripEu(p1 , p2,p3){
    console.log("visit "+ p1);
    console.log("then visit "+ p2);
    console.log("and finally the "+ p3+" city");
}

tripEu(top3[0], top3[1], top3[2]);
// tripEu(top3)
// so instead of typing all the elements of the array
// just type three dots ... and youre fine
console.log("now lets try another syntax")
tripEu(...top3);    