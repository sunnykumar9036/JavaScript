// function reverseString(str){
//     return str.split("").reverse().join("")
// }
// console.log(reverseString("hello"))


// function isPalidrome(str){
//     let reversed=str.split("").reverse().join("");
//     return str===reversed;
// }
// console.log(isPalidrome("madam"));


// function findLargest(arr){
//     let largest=arr[0];
// let samllest = arr[0]
//     for (let i=0; i<arr.length;i++){
//         if (arr[i]>largest){
//             largest=arr[i]
//         } else if(arr[i] < largest){
    // smallest = arr[i]
// }
//     }
//     return {largest, smallest}
// }
// console.log(findLargest([10,50,60,20]))


// function duplicateValue(str){
//     return[...new Set(str) ]
// }
// console.log(duplicateValue([10,10,20,203,30,50]))
// let a = [1,2,3,4,5]
// let b = ["a", "b", ...a]
// console.log(b)

// for (let i=1; i<=50; i++){
//     if (i%2==0){
//         console.log(i)
//     }
// }

// sum=0
// for (let i=1; i<=10; i++){
//     result=(sum+=i)
// }
// console.log(result)

// let fac=5
// let res=1

// for (let i=1; i<=fac; i++){
//     res*=i
// }
// console.log(res)


// let num = 17;

// if (num%2!==0){
//         console.log("odd")
//     }
// else{
//     console.log("even")
// }

// let numbers = [10, 15, 20, 25, 30];

// let result = numbers
//   .filter((num) => num >= 20)
//   .map((num) => num * 2);

// console.log(result);
// let obj = {
//     a : 1,
//     b : 2,
//     c : 3,
// }
// for (let key in obj){
//     console.log(key, obj[key])
// }
// let a = ["hello", "sunny"]
// output: ["ynnus", "olleh"]
// let arr = ["apple", "banana", "cruddle"]
// find the element containing "le"
// given an object, group the object by id


// let str = "javascript";
// let result=str.slice(0,4)+str.slice(4,5).toUpperCase()+str.slice(5)
// console.log(result)

// let str = "hello world";

// // Output: HELLO world
// let result=str.slice(0,6)+str.slice(6).toUpperCase()
// console.log(result)


// let str = "frontend developer";

// // Output: frontend DEVELOPER
// let result=str.slice(0,9)+str.slice(9).toUpperCase()
// console.log(result)


// let str = "banana";

// // Output: baNAna
// // Convert only index 2 and index 3 to uppercase.
// let result=str.slice(0,2)+str.slice(2,4).toUpperCase()+str.slice(4)
// console.log(result)


// let str = "welcome";

// // Output: welCOME
// // Convert the last 4 characters to uppercase.

// let result=str.slice(0,3)+str.slice(3).toUpperCase()
// console.log(result)


// let str = "BANGALORE";

// // Output: bangalore
// // Convert the complete string to lowercase.

// console.log(str.toLowerCase())


// let str = "javaScript";

// // Output: JAVASCRIPT
// // Convert the complete string to uppercase.

// console.log(str.toUpperCase())


// let str = "  sunny kumar  ";

// // Output: "sunny kumar"
// // Remove spaces from the beginning and end only.
// console.log(str.trim())


// let str = "hello-world";

// // Output: hello world
// // Replace `-` with a space.

// let result=str.replace('-',' ')
// console.log(result)

// let str = "apple,banana,mango";

// // Output: ["apple", "banana", "mango"]
// // Convert this string into an array.

// let result =str.split(",")
// console.log(result)

//**************************************************
// let a = ["hello", "sunny"]
// // output: ["ynnus", "olleh"]

// let result=a.join().split('')
// let s =result.reverse().join('').split(',')
// console.log(s)

// let arr = ["apple", "banana", "cruddle"]

// let result=arr.filter(item=>item.includes("le"))
// console.log(result)



//******************************************88

// let fruits = ["apple", "banana", "mango"];

// // Output: "apple | banana | mango"
// // Convert the array into a string using `|`.
// let result=fruits.join(' | ').split('" "')
// console.log(result) 


// let str = "JavaScript";

// // Output: true
// // Check whether the string contains "Script".

// let result=str.includes("Script")
// console.log(result)

// let str = "hello";

// // Output: "olleh"
// // Reverse the string.
// let result=str.split('').reverse().join("")
// console.log(result)


// let str = "madam";

// // Output: true
// // Check whether the string is a palindrome.
// // A palindrome reads the same forward and backward.

// let result=str.split('').reverse().join('');
// let s = result==str
// console.log(s)


// let str = "i love javascript";

// // Output: "I Love Javascript"
// // Capitalize the first letter of every word.
// let result=str.split(" ").map(word=>word[0].toUpperCase()+word.slice(1)).join(" ")
// console.log(result)


// let str = "aabbccdd";

// // Output: "abcd"
// // Remove duplicate characters.

// let result=[...new Set(str)]
// console.log(result)

// let str = "hello world";

// // Output: 3
// // Count the vowels: a, e, i, o, u.

// let count =0

// for (let i=1;i<str.length;i++){
//     if ("aeio".includes(str[i])){
//         count++;
//     }
// }
// console.log(count)


// let str = "I am learning JavaScript";

// // Output: 4
// // Count the number of words.

// let count=str.split(' ').length;
// console.log(count)




