console.log("Testing ... ");




// let myStream = fs.createReadStream("data.txt","utf8");
// let chunkNumber = 1;
// let word="double-decker";
// let counter = 0;

// myStream.on("data", chunk =>{
//     let len = chunk.length;
//     console.log(`Reading  ${chunkNumber} is${len}`) 
//     chunkNumber++;

//     let arr = chunk.split(` `);
//     arr.forEach(el =>{
//         if(el==word) counter++
//     })
//     console.log(`I found the word ${word} ${counter} times`)
//     counter=0;
// });

// myStream.on("end", chunk =>{
//     let len = chunk.length;
//     console.log(`Chunknumber is ${chunkNumber} is${len}`)
// });

//Pipes & writes


const fs = require("fs");

let readStream = fs.createReadStream("data.txt","utf8");
let writeStream = fs.createWriteStream("result.txt","utf8");


readStream.on("data", chunk =>{

    let res = chunk.toUpperCase();
    
    writeStream.write(res);
});





