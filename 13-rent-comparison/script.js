const currentCity = "Paris";
const compCity = "Barcelona";
const currentRent = 1200;
const compRent = 940;
const isMoreExpensive = currentRent > compRent;
const comparisonLabel = currentCity + " is more expensive: " + isMoreExpensive;
console.log(comparisonLabel);
const difference = currentRent - compRent;
const differenceLabel = "Rent difference: €" + difference;
console.log(differenceLabel);
document.getElementById("city1").innerHTML = currentCity + ": &euro;" +
  currentRent;
document.getElementById("city2").innerHTML = compCity + ": &euro;" + compRent;
document.getElementById("comparison").innerHTML = comparisonLabel;
document.getElementById("difference").innerHTML = differenceLabel;