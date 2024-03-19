const coding = ["js","ruby","java","python","cpp"]

// coding.forEach(function (item) {
//   console.log(item);
// })

//callback function do not have a name and used in forEach loop

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item,o,p)=>{
//     console.log(item,o,p);
// })
// array_name.forEach((value,index,array)=>{})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})
