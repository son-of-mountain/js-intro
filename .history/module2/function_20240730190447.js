function letterFinder(arr , t){
    for(var i=0 ; i < arr.length ; i++){
        if(t == arr[i])
            console.log('Found the', t, 'at', i);
        else    
            console.log('---No match found at', i)

    }
}