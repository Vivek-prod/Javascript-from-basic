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
  for (let i = 0; i < todolist.length; i++) {
    const todoname = todolist[i].name;
    const toDueDate = todolist[i].duedate;

    //or we can do
    /*
     const {name,duedate}=todolist[i]
     then instead of using todoname and toduedate just direct use name and duedate
     */

    const html = `<div>${todoname}</div>
    
    <div>${toDueDate}</div>

    <button onclick='
  
    todolist.splice(${i},1);
    rendertodolist();
    
    ' class='delete-button'>delete</button>


    `;
    todolisthtml += html;
  }
  document.querySelector(".js-tod-list").innerHTML = todolisthtml;
}
