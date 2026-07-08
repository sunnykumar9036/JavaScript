const user={
  username:"sunny",
  price:99,

  welcomeMessage:function(){
    console.log(`${this.username},welcome to website`); // this will resfrent corrent context ko refer karta hai
    // console.log(this);
  }

}

// user.welcomeMessage()
// user.username="kumar"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//   let username="sunny"
//   console.log(this);
// }
// chai()

const chai =()=>{
  let username ="sunny"
  console.log(this);
}
// chai()

// const addTwo =(num1 , num2)=>{ //if we are using {} we need to write return k.w
//   return num1+num2

// }

// const two=(num1,num2)=>num1+num2


console.log(two(3,4));