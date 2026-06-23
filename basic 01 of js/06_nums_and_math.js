
//numbers
const score=400
// console.log(score);
// console.log(typeof(score));


const balance=new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));//o/p->100.00

const itherNumber=123.89653

// console.log(itherNumber.toPrecision(3));//it will roundoff

const newnumber=100000000

// console.log(newnumber.toLocaleString("en-IN"));

//maths
// console.log(Math);
// console.log(Math.abs(-4));

// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));//->5
// console.log(Math.floor(4.9));//-->4
// console.log(Math.min(4,5,6,67,4));
// console.log(Math.max(1,56,8,6,6));

console.log(Math.random());//->it will generate the random number

console.log((Math.random()*10)+1);


const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)