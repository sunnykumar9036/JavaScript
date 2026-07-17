const promise1 = new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log('async task is completed');
    resolve()
  },1000)
})

promise1.then(function(){
  console.log("promise consumed");
})

new Promise(function(resolve,reject){
  setTimeout(() => {
    console.log("Async task 2");
    resolve()
  }, 1000);
}).then(function(){
  console.log("async 2 resolved");
})


const promise3 = new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve({username : "sunny", email:"sunny@gmai.com"})
  },1000)
})

promise3.then(function(user){
  console.log(user);
})


const promise4 = new Promise(function(resolve,reject){
  setTimeout(function(){
     let error = true
     if(!error){
      resolve({username: "sunny" , pass:"123"})
     }
     else{
      reject('error : somthing went wrong')
     }
    
  },1000)
})

promise4.then((user)=>{
  console.log(user);
  return user.username
}).then((username)=>{
  console.log(username);
}).catch(function(error){
  console.log(error);
}).finally(function(){
  console.log("the promise is either resolved or rejected");
})


const promise5= new Promise(function(resolve,reject){
  setTimeout(function(){
    let error = true
    if (!error){
      resolve({username:"java",pass:1224})
    }else{
      reject('error : js went wrong')
    }
  },1000)
})


async function consumePromisefive(){
  try{
    const response = await promise5
  console.log(response);
  }catch (error){
    console.log(error);
  }
}

consumePromisefive()


// async function getall() {
//    try{
//     const response= await fetch('https://jsonplaceholder.typicode.com/users')
//    const data = await response.json()
//    console.log(data);
//    } catch(error){
//     console.log("error occure during fetch",error)
//    }
// }

// getall()

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
  return response.json()
}).then((data)=>{
  console.log(data);
})
.catch((error)=>console.log(error))

