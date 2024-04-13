//  for

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 found");
    }
    // console.log(element);
    
}

// for (let i=0;i<10;i++){
//     console.log(i);
// }

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loops vslues: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop vslues: ${j} and outer loop values: ${i}`);
        // console.log(i + "*" + j + "=" + i*j);
    }
    
}

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

//  breake and continue

for (let index = 1; index <= 20; index++) {
    if (index == 7) {
        console.log("7 detected");
        
        break
    }
    // console.log(`Vakue of index id ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 7) {
        console.log("7 detected");
        console.log(`value of index is ${index}`);
        continue
    }
    console.log(`Vakue of index id ${index}`);
    
}
