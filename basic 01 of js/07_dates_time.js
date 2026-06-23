//dates

let myDate=new Date()
// console.log(myDate.toDateString());//Mon Jun 22 2026
// console.log(myDate.toString()); //Mon Jun 22 2026 11:40:54 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString());//2026-06-22T06:10:54.592Z
// console.log(myDate.toLocaleDateString());//6/22/2026
// console.log(myDate.toLocaleString());// 6/22/2026, 11:42:21 AM
// console.log(typeof myDate);//object


// let myCreatedDate=new Date(2023,0,23)
// let myCreatedDate=new Date(2023,0,23,5,3)
let myCreatedDate=new Date("01-12-2023")
// console.log(myCreatedDate.toLocaleString());

let timeStamp=Date.now()
console.log(timeStamp);  