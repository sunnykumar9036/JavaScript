let arr=[10,20,30,43,50]

for (const i of arr) {
  // console.log(i);
}

let arr1=['sunny','kumar','jassi']

for (const str of arr1) {
  let h =str
  // console.log(h.split(',').join(''));
}

//map

const map =new Map()
map.set('IN',"india")
map.set('usa',"United state of an america")
map.set('chi',"china")
map.set('IN',"india")

// console.log(map);

for (const [key, value] of map) {
  console.log(key,';-',value);
}

const myObject={
  game : 'NFS',
  game2 :'Spiderman'
}

// for (const [key,value] of myObject) {
//   console.log(key ,value);
// }