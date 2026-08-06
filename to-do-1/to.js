const todolist = [];

function addtodo() {
  const inputElement = document.querySelector(".js-input");
  const todo = inputElement.value;
  if (todo !== "") {
    todolist.push(todo);
    console.log(todolist);

    inputElement.value = "";
    rendertodolist();
  }
}

function inputkeydown(event) {
  if (event.key === "Enter") {
    addtodo();
  }
}

function rendertodolist() {
  let todolisthtml = "";
  for (let i = 0; i < todolist.length; i++) {
    const todoname = todolist[i];
    const html = `<p>${todoname}</p>`;
    todolisthtml += html;
  }
  document.querySelector(".js-todo-list").innerHTML = todolisthtml;
}
