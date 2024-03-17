// Primitive 
//7 types: String , Number , Boolean , null, undefined, Symbol, BigInt, 

const score = 100;
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);
// console.log(id);
// 
const bigNumber = 1284585346514173745n
// console.log(typeof bigNumber);

//Reference(Non-primitive)
//Arrays, Objects, Functions,  


const heros = ["shaktiman","naagraj","shakalakaboom"]

  const myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
  console.log("hello World");
}

console.log(typeof outsideTemp)

//https://262.ecma-international.org/5.1/#sec-11.4.3


//++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive), Heap(Non-primitve)

let myYoutubename = "hiteshchoudharydotcom"
let anotherName = myYoutubename
anotherName = "chaiaurcode"

// console.table([myYoutubename,anotherName])

let userOne = {
  email: "user@google.com",
  upi: "user@ybl"
}

let userTwo  = userOne

userTwo.email = "panduemail.com"
console.log(userOne.email);
console.log(userTwo.email);