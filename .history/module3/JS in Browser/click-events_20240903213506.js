const target = document.querySelector('body')

const bigTitles = document.querySelector('h1')

target.addEventListener('click',handleClickEvent)
bigTitles.addEventListener('copy',handleClickEvent2)


function handleClickEvent(){
    console.log('you clicked on the body')
}

// with this thing we're printing this message when we click "the body"
