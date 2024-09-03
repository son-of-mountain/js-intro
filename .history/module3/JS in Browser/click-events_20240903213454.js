const target = document.querySelector('body')

const bigTitles = document.querySelector('h1')

target.addEventListener('click',handleClick)
bigTitles.addEventListener('copy',handleC)


function handleClickEvent(){
    console.log('you clicked on the body')
}

// with this thing we're printing this message when we click "the body"
