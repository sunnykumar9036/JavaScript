function sayMyname(){
  console.log("s");
  console.log("u");
  console.log("n");
  console.log("n");
  console.log("y");      
}
// sayMyname()

// function addTwoNumber(number1,number2){
//   console.log(number1+number2);
// }
// addTwoNumber(3,5)

function addTwoNumber(number1,number2){
  return (number1+number2);
}

const result=addTwoNumber(3,5)
// console.log("result: ",result);

// function loginUserMessge(username){
//   if(username===undefined){
    // console.log("please enter a user name");
  //   return
  // }
  // return `${username} just logged in`
// }
// console.log(loginUserMessge());

function calculatorCartPrice(...num1){
  return num1
}
// console.log(calculatorCartPrice(200,400,500));

const user={
  username:"sunny",
  prices:199
}
function handleObjects(anyobject){
  console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObjects(user)

// handleObjects({
//   username:"sam",
//   price:566
// })

const myNewArray=[200,400,100,600]

function returnSecondvalue(getarray){
  return getarray[1]
}
console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([200,400,600,800]));