const account = "regular";
let accountStatus = "active";
const isAdmin = account === "admin";
const isValid = accountStatus !== "inactive";
console.log("Admin: " + isAdmin);
console.log("Valid: " + isValid);