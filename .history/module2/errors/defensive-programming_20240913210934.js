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
    catch(error) {
        console.error('An error occurred:', error.message)
    }

letterFinder(22, 1) 
letterFinder("cat", "c")
