let map = new Map();
const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
for(var key in drone) {
    map.set(key , drone[key])
}
