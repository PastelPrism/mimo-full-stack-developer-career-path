function createTodo() {
  const listItem = document.createElement("li");
  const todosContainerElement = document.getElementById('todos-container');
  todosContainerElement.appendChild(listItem);

  const userInput = document.getElementById('note').value;

  listItem.innerHTML = userInput;

  listItem.setAttribute("onclick", "todoCheck(event, this)");

  document.getElementById('note').value = "";
}

function deleteTodos() {
  const todosContainerElement = document.getElementById('todos-container');
  todosContainerElement.innerHTML = "";
}

function todoCheck(e, todo) {
  if (todo.style.textDecoration === "") {
    todo.style.textDecoration = "line-through";
  } else {
    todo.style.textDecoration = "";
  }
}
