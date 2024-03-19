const myNums = [1,4,8,6]

// const myTotal = myNums.reduce(function(acc,curVal){
//     console.log(`acc: ${acc} and currVal: ${curVal}`);
//     return acc * curVal
// },1)


// const myTotal  = myNums.reduce((acc,curVal)=>{
//     return acc+curVal
// },0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName:"js course",
        price: 2999
    },
    {
        itemName:"pyhton course",
        price: 999
    },
    {
        itemName:"mobile dev course",
        price: 5999
    },
    {
        itemName: "data sciece course",
        price: 11999
    }
]

const totprice = shoppingCart.reduce((acc,item)=>{
      return acc+item.price
},0)

console.log(totprice);

