// let a=10
// const b=20
// var c=300

if (true){
  let a=10
  const b=20
  var c=30
}//->>. this is scope os an prograam

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
  const name="sunny"

  function two(){
    const website="youtube"
    console.log(name);
  }
  // console.log(website);
  two()
}
// one()

if (true){
  const username="sunny"
  if (username==="sunny"){
    const websitr="youtube"
    console.log(username+websitr);
  }
  // console.log(websitr);
}
// console.log(username);

console.log(addone(5))
function addone(num){
  return num+1
}


const addtwo=function(num){
  return num+2
}
addtwo(10)


