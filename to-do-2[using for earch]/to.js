const todolist = [];

function addtodo() {
  const inputElement = document.querySelector(".js-input");
  const inputdate = document.querySelector(".js-date");
  const datee = inputdate.value;
  const todo = inputElement.value;
  if (todo && datee) {
    todolist.push({ name: `${todo}`, duedate: `${datee}` });
    inputElement.value = "";
    inputdate.value = "";
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

  todolist.forEach(function (todoobject, index) {
    const { name, duedate } = todoobject;

    const html = `<div>${name}</div>
    
    <div>${duedate}</div>

    <button onclick='
  
    todolist.splice(${index},1);
    rendertodolist();
    
    ' class='delete-button'>delete</button>


    `;
    todolisthtml += html;
  });

  document.querySelector(".js-tod-list").innerHTML = todolisthtml;
}
