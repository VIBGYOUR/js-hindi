

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()
// const number1 = 1;
// const number2 = 2;
// function adTwoNumbers(number1,number2){
//    console.log(number1 + number2)
// }
function adTwoNumbers(number1,number2){
    //  let result = number1+number2
    //  return result
    return number1+number2
 }

const result = adTwoNumbers(3,4)
// console.log(result)

function loginUserMessage(username="pie"){
    if(!username){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("parag"))
// console.log(loginUserMessage())



function calculateCartPrice(val1,val2, ...num1){
    return val1,val2,num1
}

// console.log(calculateCartPrice(200,400,500,657))

const user = {
    username: "hitesh",
    price: 199
}


function handleObject(anyObject){
   console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399
// })

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));