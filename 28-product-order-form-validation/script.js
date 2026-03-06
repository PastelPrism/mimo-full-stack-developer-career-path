function showError(id) {
  const input = document.querySelector(id);
  input.classList.add("error");
}

function removeError(id) {
  const input = document.querySelector(id);
  input.classList.remove("error");
}
const checkQuantity = () => document.querySelector("#quantity").value > 0;
const checkColor = () => document.querySelector("#color").value !== "--";
const checkState = () => document.querySelector("#state").value.length == 2;

function checkForm() {
  if (!checkQuantity()) {
    showError("#quantity");
  } else {
    removeError("#quantity");
  }
  if (!checkColor()) {
    showError("#color");
  } else {
    removeError("#color");
  }
  if (!checkState()) {
    showError("#state");
  } else {
    removeError("#state");
  }
  if (checkQuantity() && checkColor() && checkState()) {
    document.querySelector("#status").classList.remove("hidden");
  }
}