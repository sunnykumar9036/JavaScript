const form=document.querySelector('form')

  //this usecase wil give empty
  // const height=parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
  e.preventDefault()

  const height=parseInt(document.querySelector('#height').value)
  const weight=parseInt(document.querySelector('#height').value)
  const results=document.querySelector('#results')

  if(height ===''|| height<0|| isNaN(height) ){
    results.innerHTML ="please give a valid height";
  }
  results.inn
})