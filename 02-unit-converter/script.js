function convert() {
  const inputValue = document.getElementById('userInput').value; 
  const unit = document.getElementById('unit').value;

  const milesToKm = (unit === "milesToKm");

  let result = 0;

  if (milesToKm) {
    result = inputValue * 1.60934;
  } else {
    result = inputValue / 1.60934;
  }

  const resultString = inputValue + " miles are " + result + " km";
  console.log(resultString);

  const resultElement = document.getElementById('resultElement');
  resultElement.innerHTML = resultString;
}

