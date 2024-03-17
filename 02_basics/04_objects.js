// const tinder = function(){

// }

const tinder = new Object()
// const tinder = {}

tinder.id = "123abc"
tinder.name = "Sam"
tinder.isloggedin = false
// console.log(tinder);

const regularUser = {
    email: "parag0158@gmail.com",
    fullname:{
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

//console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj4 = {5: "a", 6:"b"}

// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({},obj1,obj2,obj4)

// const obj3 = {...obj1, ...obj2}

// console.log(obj3); 

const users = [
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:1,
        email: "h@gmail.com"
    }
]

// console.log(users[1].email)
// console.log(tinder)
// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));

// console.log(tinder.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price":"free"
// }

[
    {},
    {},
    {}
]




