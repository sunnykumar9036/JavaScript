//immediately invoked function expressions (iife)

(function chai(){  //name iifi
  console.log('DB connected');
})();

( (name) => {
  console.log(`db conected two ${name}`);
} )('sunny')
