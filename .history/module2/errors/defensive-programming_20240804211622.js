function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2
    var condition2 = typeof(match) == 'string' && match.length == 1
    // try{
        if(condition1 && condition2){
            for(var i = 0; i < word.length; i++) {
                if(word[i] == match) {
                    //if the current character at position i in the word is equal to the match
                    console.log('Found the', match, 'at', i)
                } else {
                    console.log('---No match found at', i)
                }

            }
        }
        else{
            console.error('Please pass correct arguments to the function.')   
        }

    }
    // catch(error) {
    //     console.error('An error occurred:', error.message)
    // }

letterFinder('hello', 'l') // Found the l at 2
letterFinder('hello', 'x') // ---No match found at 3
letterFinder(123, 'l') // Please pass correct arguments to the function.
letterFinder('hello', 5) // Please pass correct arguments to the function.
