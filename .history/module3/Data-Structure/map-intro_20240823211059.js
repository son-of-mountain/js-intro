let ma`p = new Ma`p();
const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
for(var key in drone) {
    map.set(key , drone[key])
}

console.log(map)