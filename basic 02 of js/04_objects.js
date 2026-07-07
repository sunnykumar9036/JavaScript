// const tinderUser= new Object() //single term objects  o/p->{}
const tinderUser= {} //non single ter objects o/p->{}
// console.log(tinderUser);

tinderUser.id="123"
tinderUser.name="sammy"
tinderUser.isloggedin=false

// console.log(tinderUser);

const regularUser={
  email:"sunny#gmal.ocm",
  fullname:{
    userfullname:{
      firstname:"sunny",
      lastname:"kumar"
    }
  }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// const obj3= Object.assign({},obj1,obj2)
// console.log(obj3);

const obj3={...obj1,...obj2}
// console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isloggedin'));

