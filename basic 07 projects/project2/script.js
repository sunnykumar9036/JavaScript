const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseFloat(document.querySelector('#height').value);
  const weight = parseFloat(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please give a valid height`;
    return;
  }

  if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please give a valid weight`;
    return;
  }

  const bmi = weight / ((height * height) / 10000);

  if (bmi < 18.6) {
    results.innerHTML = `BMI: ${bmi.toFixed(2)} - Under Weight`;
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    results.innerHTML = `BMI: ${bmi.toFixed(2)} - Normal Weight`;
  } else {
    results.innerHTML = `BMI: ${bmi.toFixed(2)} - Over Weight`;
  }
});