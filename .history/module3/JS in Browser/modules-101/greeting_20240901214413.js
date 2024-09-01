export const informalGreeting = (person) => {
    console.log(`what's up ${person}.`)
}
export const formalGreeting = (nums) => {
    for(let i = 0; i < nums; i++)
        console.log(`Good morning Gentelman.`)
}

export default greeting;