// const promiseOne = new Promise(function(resolve,reject){
//     // Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is completed');
//     },4000)
//     reject();
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// }).catch(function(){
//     console.log("fail hogya yrr");
// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task two");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Async two resolved");
// })


// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"Chai",email:"chhai@gmail.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//      console.log(user);
// })


// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username:"hitesh",password:"123"})
//         }else{
//             reject('ERROR: Something went wrong')
//         }
//     },1000)
// })

// promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.username 
// }).then((username)=>{
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=>{
//     console.log("The promise is either resolved or rejected");
// })

// const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = false
//         if(!error){
//             resolve({username:"javascript",password:"123"})
//         }else{
//             reject('ERROR: JS went wrong')
//         }
//     },1000)
// });

// async function consumePromiseFive(){
//    try {
//      const response = await promiseFive
//      console.log(response);
//    } catch (error) {
//     console.log(erro);
//    }
// }

// consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//     const data = await response.json()
//     console.log(data); 
//     } catch (error) {
//         console.log("E:",error);
//     }
// }

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
  console.log(data);
})
.catch((error)=>{
    console.log(error);
})


// getAllUsers()


// promises are a solution to callback hell
// async function returns a promise
// await pauses the execution of its surrounding async function until the promise is settled
// await can only be used inside a async function

