const name="sunny"
const age=19


// console.log("my namr is"+name+ "and my age is "+ age); //out-dated
// console.log(`my name is ${name} and my age is ${age}`);

const gameName=new String("GTA-5")//to declare the string  
// console.log(gameName[1]);
// console.log(gameName.__proto__);

//method

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLocaleLowerCase());
console.log(gameName.toLowerCase());
// console.log(gameName.charAt(1));
console.log(gameName.indexOf("g"));
console.log(gameName.endsWith("A"));

console.log(gameName.slice(0,1));//we can use negative number

console.log(gameName.substring(-3,1));//it will ignore the negative number and start with 0

console.log(gameName.trim());//it will remove the spaces in the string

const url="htps:hitesh.com/hitesh%20choudary"

console.log(url.replace('%20','-'));

console.log(url.includes('sunny'));


const collegeName="amc-engineering-college"

console.log(collegeName.split('-'));









