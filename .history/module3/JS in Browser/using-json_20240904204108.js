// {
//     "greeting" :[
//         "hello",
//         "world"
//     ]
// }


// the above code is a JSON representation 
const jsonStr = '{"greeting" :["hello","world"]}'


// lets turn it into a js object :
const plainJson = JSON.parse(jsonStr)

console.log(plainJson)

for(var key in plainJson)
