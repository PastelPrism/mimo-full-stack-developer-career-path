const averageSpeed = 57;
const mpg = 27;
const gallons = 13;
const destination = "Ithaca, NY";
const tripMiles = 74 + 63 + 167;

const time = tripMiles / averageSpeed;
const tankRange = mpg * gallons;
const leftoverGasRange = tankRange - tripMiles;
console.log("Trip to " + destination);
console.log("Estimated Time: " + time);
console.log("Range Remaining: " + leftoverGasRange);