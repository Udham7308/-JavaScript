/* Array Specific loops */
// for of loop
// for (const iterator of object) { // Here object is declear for structure(array,object ..etc).
    
// }

const number = [1,2,3,4,5,6]

for (const num of  number) {
    //console.log(num);
}

const greetings = 'helloworld'

for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
}

/* Maps ==> Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection */

const map = new Map()
map.set('IN', 'India')
map.set('Fr',"France")
map.set('UK',"united kingdom")
map.set('IN', 'India')
//console.log(map);

// for (const [key , value] of map) {
//     //console.log(key,':-',value);    
// }
for (const key of map) {
    console.log(key);
}

const myObject ={ // Here myObject is not iterable.
    game1: 'NFS',
    game2: 'COD'
}
// for (const [key,value] of myObject) {
//     //console.log(key,':-',value);
// }

