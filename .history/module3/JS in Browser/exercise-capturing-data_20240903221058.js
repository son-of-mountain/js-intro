let h1 = document.querySelector('h1');
// let body = document.querySelector('body');

var arr = [
    'Click the first one',
    'First Click',
    'Second Click',
    'Third Click'
]

function handleClicks(){
    switch (h1.innerText) {
        case arr[0]:
            h1.innerText = arr[1];
            break;
        case arr[1]:
            h1.innerText = arr[2];
            break;
        case arr[2]:
            h1.innerText = arr[3];
            break;
        case arr[3]:
            h1.innerText = arr[0];
            break;
        default:
            h1.innerText = arr[0];
            break;
    }
}

h1.addEventListener('click', handleClicks);
h1.addEventListener('copy', function);

