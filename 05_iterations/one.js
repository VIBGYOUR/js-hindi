// for

// for (let i = 0; i < 6; i++) {
//     var element = i;
//     if(element==5){
//         console.log("5 is best number");
//     }
//     console.log(element);
// }

// console.log(element);

for (let i = 0; i <= 2; i++) {
    //console.log(`Outer loop:    ${i}`);
    for (let j = 0; j <= 5; j++) {
        // console.log(`Inner loop: ${j}`);
      //  console.log(i+' * '+j+' = ' + i*j);
    }    
}

// let myArray = ["flash","batman","superman"]
// console.log(myArray.length);

// for (let i = 0; i <= myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element);    
// }

// break and continue

// for (let i = 0; i <= 20; i++) {
//     if(i==5) {
//         console.log("5 detected"); 
//         break;
//     }
//     console.log(`Value of i is ${i}`);    
// }
for (let i = 0; i <= 20; i++) {
    if(i==5) {
        console.log("5 detected"); 
        continue;
    }
    console.log(`Value of i is ${i}`);    
}