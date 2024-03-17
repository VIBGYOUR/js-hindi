// singleton

// const JsUser = {}



//object literals
const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "fullname" : "Hitesh CHoudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser[mySym])
// console.log(JsUser.fullname)

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "microsoft@google.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user")
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
