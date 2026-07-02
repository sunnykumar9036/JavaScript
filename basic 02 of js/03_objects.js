// singleton -> yaa literal sa nahi banaga and constructor sa bana ga

//object literal

const JsUser ={
  name: "sunny",
  "full name": "sunny kumar",
  age: 21,
  loc: "bengaluru",
  gmail: "sunnyku9036@gmail.com",
  isLoggedIn: false,
  lastLoginDay: ["monday","saturday"]
}

console.log(JsUser.gmail);
console.log(JsUser["gmail"]);