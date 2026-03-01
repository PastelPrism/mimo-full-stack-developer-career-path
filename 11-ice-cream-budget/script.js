const price = 2.50;
const campers = 15;
console.log(price);
console.log(campers);

const taxRate = 0.08;
console.log(taxRate);

const budget = 40;
const total = price * campers * (1 + taxRate);
console.log(total);

const totalExceedsBudget = total > budget;
console.log("Total Exceeds Budget? " + totalExceedsBudget);

const taxApplied = total > (price * campers);
console.log("Tax Applied? " + taxApplied);