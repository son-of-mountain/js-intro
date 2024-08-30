// ----------------------------- MAP --------------------------
const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
let droneSpecs = new Map();
for(var key in drone){
    droneSpecs.set(key, drone[key])
}
console.log(droneSpecs)
// ------------------------------- SET --------------------------
const repetitiveNames =[ 'ayman' , 'mouaad' , 'salah' , 'ayman' , 'mouaad']
const norepetitiveNames = new Set(repetitiveNames);
console.log(norepetitiveNames)