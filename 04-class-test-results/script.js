const maxPoints = 120;
const passingPoints = 70;
const samPoints = 84;
let alexPoints = 45;
const jessiePoints = 99;
let didAlexPass = false;
const samPointsDisplay = "Sam earned " + samPoints + " points out of " +
  maxPoints;
console.log(samPointsDisplay);
const alexPointsDisplay = "Alex earned " + alexPoints + " points out of " +
  maxPoints;
console.log(alexPointsDisplay);
const jessiePointsDisplay = "Jessie earned " + jessiePoints +
  " points out of " + maxPoints;
console.log(jessiePointsDisplay);
const samPercentage = (samPoints / maxPoints) * 100;
const samPercentDisplay = "Sam scored " + samPercentage + "%.";
console.log(samPercentDisplay);
const alexPercentage = (alexPoints / maxPoints) * 100;
const alexPercentDisplay = "Alex scored " + alexPercentage + "%.";
console.log(alexPercentDisplay);
const jessiePercentage = (jessiePoints / maxPoints) * 100;
const jessiePercentDisplay = "Jessie scored " + jessiePercentage + "%.";
console.log(jessiePercentDisplay);
const samMissedPoints = maxPoints - samPoints;
const alexMissedPoints = maxPoints - alexPoints;
const jessieMissedPoints = maxPoints - jessiePoints;
const samMissedPointsDisplay = "Sam missed " + samMissedPoints + " point(s).";
console.log(samMissedPointsDisplay);
const alexMissedPointsDisplay = "Alex missed " + alexMissedPoints +
" point(s).";
console.log(alexMissedPointsDisplay);
const jessieMissedPointsDisplay = "Jessie missed " + jessieMissedPoints +
  " point(s).";
console.log(jessieMissedPointsDisplay);
const classAveragePoints = (samPoints + alexPoints + jessiePoints) / 3;
const classAveragePercent = (classAveragePoints / maxPoints) * 100;
const classAvgDisplay = "The class average was " + classAveragePoints +
  " points or " + classAveragePercent.toFixed(2) + "%.";
console.log(classAvgDisplay);
alexPoints = 75;
didAlexPass = alexPoints >= passingPoints;
const alexPointsUpdated =
  "Alex failed initially, but did extra credit. Their new score is " +
  alexPoints + " out of " + maxPoints;
console.log(alexPointsUpdated);
const listItemArray = document.querySelectorAll("li");

listItemArray[0].innerHTML = "Raw Points:";
listItemArray[1].innerHTML = samPointsDisplay;
listItemArray[2].innerHTML = alexPointsDisplay;
listItemArray[3].innerHTML = jessiePointsDisplay;
listItemArray[4].innerHTML = "Percentages:";
listItemArray[5].innerHTML = samPercentDisplay;
listItemArray[6].innerHTML = alexPercentDisplay;
listItemArray[7].innerHTML = jessiePercentDisplay;
listItemArray[8].innerHTML = "Missed Points:";
listItemArray[9].innerHTML = samMissedPointsDisplay;
listItemArray[10].innerHTML = alexMissedPointsDisplay;
listItemArray[11].innerHTML = jessieMissedPointsDisplay;
listItemArray[12].innerHTML = "Final Notes:";
listItemArray[13].innerHTML = classAvgDisplay;
listItemArray[14].innerHTML =
  alexPointsUpdated + " Alex " + (didAlexPass ? "passed" : "did not pass") + ".";