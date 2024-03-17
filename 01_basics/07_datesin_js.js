//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleTimeString('in-EN'));
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toUTCString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate.getTimezoneOffset());

let myTimeStamp = new Date()

 

 myTimeStamp.toLocaleString('default',{
    weekday: "long"
 })
console.log(`Today time is ${myTimeStamp}`);




