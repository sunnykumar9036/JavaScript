const mvr_heroes=["thor","Ironman","spiderman"]
const dc_herores=["superman","flash","batman"]

// mvr_heroes.push(dc_herores)
// console.log(mvr_heroes); //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(mvr_heroes[3]);

// const allHeroes = mvr_heroes.concat(dc_herores)//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// console.log(allHeroes);

// const all_new_heroes = [...mvr_heroes,...dc_herores]//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// console.log(all_new_heroes);


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_array = another_array.flat(Infinity)//[  1, 2, 3, 4, 5,  6, 7, 6, 7, 4,5]
// console.log(real_array);


// console.log(Array.isArray("sunny"))//false
console.log(Array.from("sunny"))//[ 's', 'u', 'n', 'n', 'y' ]

console.log(Array.from({name:"sunny"})) //[]

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));



