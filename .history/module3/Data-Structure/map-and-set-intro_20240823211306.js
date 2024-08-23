// --------------------------------------   MAP --------------------------
let droneSpecs = new Map();
const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
for(var key in drone) {
    droneSpecs.set(key , drone[key])
}

console.log(droneSpecs)

// ------------------------------- SET --------------------------
const repe