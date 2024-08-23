// // Task 1
// function logDairy() {
//     var dairy = ['cheese', 'sour cream', 'milk',
//         'yogurt', 'ice cream', 'milkshake']
//     for (var item of dairy)
//         console.log(item);
// }
// logDairy()
// Task 2

const animal = {
    canJump: true
};
function birdCan() {
    const bird = Object.create(animal)
    bird.canFly = true;
    bird.hasFeathers = true;

    for (var prop of Object.keys(bird)) {
        console.log(`${prop}: ${bird[prop]}`)
    }
}
birdCan()
// Task 3


