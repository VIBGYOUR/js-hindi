const marvel_heroes = ["thor","Ironman","spidermaan"]
const dc_heroes = ["superman","batman","flash"]

// marvel_heroes.push(dc)

// console.log(marvel_heroes[3][2]);

// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);

// const all_new_heroes = [...marvel_heroes, ...dc_heroes]

// console.log(all_new_heroes[0])

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name:"Hitesh"}))  //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
