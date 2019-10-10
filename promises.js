//Promises

// const bab = true;

// const promise = new Promise((resolve, reject) => {
//     if (bab) resolve(` I have been resolved`);
//     else reject(`I have been rejected`);
// });
// console.log(promise)

// const promise = new Promise((resolve, reject) => {
//     const randomNum = Math.random();
//     console.log(randomNum)
//     if (randomNum > 0.7)
//         resolve(`All things are good`)
//     else reject(new Error(`All things went bad`))
// });

// promise
// .then(data => {
//     console.log(data)
// }).catch(error => {
//     console.log(error)
// });

//Chaining promises

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         resolve(`Promise 1 is  resolved`);
//     },2000)

// });
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         resolve(`Promise 2 is  resolved`);
//     },2000)

// });
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         resolve(`Promise 3 is  resolved`);
//     },2000)

// });

// promise1
//     .then(data => {
//         console.log(data);
//         return promise2
//     }).then(data =>{
//         console.log(data)
//         return promise3
//     }).then(data=>{
//         console.log(data)
//     })

// Promise.all([promise1,promise2,promise3]).then(data => {
//     console.log(data)
// });

//ASYNC/WAIT

// printAMessage = () => {
//     return new Promise(resolve => {
//         resolve(`I am the message that should be printed`);
//     });
// };
// printAMessage().then(data => {
//     console.log(data);
// });

// callMyFunction = () => {
//     printAMessage().then(data => {
//         console.log(data);
//     });
// }
// callMyFunction();

// callMyFunction = async () => {
//     const msg = await printAMessage();
//     console.log(`Message : `, msg)
// };
// callMyFunction();

//Promisify

// const fs = require("fs");
// const {
//     promisify
// } = require("util");
// console.log(promisify)

// fs.readFile("./data.txt", "utf8", (err,data)=>{
//     if(err) throw err;
//     console.log(data);
// });

// const myReadFileAsync = promisify(fs.readFile);

// myReadFileAsync("./data.txt", "utf8").then(data => {
//     console.log(data)
// });

//RECAP

const randomNumber= Math.random();

const promise = new Promise((resolve, reject) => {
  if (randomNumber > 0.5) resolve(`We are doing great! ${randomNumber}`);
  else reject("Ufff, bad man!");
});

promise.then((data)=>{
    console.log(data)
});
promise.catch((err)=>{
    console.log(err)
});

