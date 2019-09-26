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

const promise1 = new Promise((resolve, reject) => {
    resolve(`Promise 1 is  resolved`);
});
const promise2 = new Promise((resolve, reject) => {
    resolve(`Promise 2 is  resolved`);
});
const promise3 = new Promise((resolve, reject) => {
    resolve(`Promise 3 is one resolved`);
});

promise1
    .then(data => {
        console.log(data);
        return promise2
    }).then(data2 =>{
        console.log(data2)
    })