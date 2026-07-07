// singleton -> yaa literal sa nahi banaga and constructor sa bana ga

//object literal

const mysym =Symbol("key1")

const JsUser ={
  name: "sunny",
  "full name": "sunny kumar",
  [mysym]: "mykey1",
  age: 21,
  loc: "bengaluru",
  gmail: "sunnyku9036@gmail.com",
  isLoggedIn: false,
  lastLoginDay: ["monday","saturday"]
}

// console.log(JsUser.gmail);
// console.log(JsUser["gmail"]);
// // console.log(JsUser.full name); we cant acces a if a key is in a string
// console.log(typeof(JsUser.mysym));
// console.log(JsUser[mysym]);// we are getting the o/p using symbol 


JsUser.gmail="kumar@gmail.com"
// Object.freeze(JsUser) // it will freeze the value
JsUser.gmail="kkkkk@gmail.com"
// console.log(JsUser);

JsUser.grettingTwo=function(){
  console.log('hello js user');
}

JsUser.gretting=function(){
  console.log(`hello js user ${this.name}`);
}
console.log(JsUser.grettingTwo());
console.log(JsUser.gretting());
