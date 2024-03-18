const user = {
    username: "hitesh",
    price: 999,
    welcommeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcommeMessage()
// user.username = "Sam"
// user.welcommeMessage()

// console.log(this);

//this talks about current context

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()  // Output: undefined

const chai = () => {
    let username = "hitesh"
    console.log(this);
}

// chai()
//arrow function   ()=>{}
// const addTwo = (num1,num2)=>{
//     return num1+num2
// }

// const addTwo = (num1,num2) => num1+num2
// const addTwo = (num1,num2) => (num1+num2)
                //small bracket no need of return statement but with curly bracket return statement is needed

const addTwo = (num1,num2) => {username:"hitesh"}
console.log(addTwo(2,3))
