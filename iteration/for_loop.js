// for

for (let i = 0; i <= 10; i++) {
    
    const num = i
    if(num == 5){
       // console.log(`5 is the biggest number`);
    }
    //console.log(i);
    
}

// console.log(element);

for (let i = 1; i <= 5; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 4; j++) {
    //console.log(`Inner loop value ${j} and outer loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray [i];
    //console.log(element);
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected value 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}