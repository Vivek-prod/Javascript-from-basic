const todolist = [];

function addtodo() {
  const inputElement = document.querySelector(".js-input");
  const todo = inputElement.value;
  if (todo !== "") {
    todolist.push(todo);
    console.log(todolist);

    inputElement.value = "";
  }
}

function inputkeydown(event) {
  if (event.key === "Enter") {
    addtodo();
  }
}
