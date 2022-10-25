let toDoList = [];

function saveToDo(toDo) {
  const toDoObj = {
    text: toDo,
    id: toDoList.length + 1,
  };
  toDoList.push(toDoObj);
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
}

function paintToDo(toDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteButton = document.createElement("button");
  span.innerHTML = toDo;
  li.appendChild(span);
  document.querySelector(".toDos").appendChild(li);
  li.classList.add('list')
  document.querySelector(".list").appendChild(deleteButton);
}

function createToDo(event) {
  // submit시 새로고침 방지
  // event.preventDefault();
  const toDo = document.querySelector("form.toDoForm > input").value;
  console.log(toDo);
  paintToDo(toDo);
  saveToDo(toDo);
  document.querySelector("form.toDoForm > input").value = "";
}

function loadToDoList() {
  const loadedToDoList = localStorage.getItem("toDoList");
  if (loadedToDoList !== null) {
    const parsedToDoList = JSON.parse(loadedToDoList);
    for (let toDo of parsedToDoList) {
      const { text } = toDo;
      paintToDo(text);
      saveToDo(text);
    }
  }
}

function deleteToDo() {}

function init() {
  loadToDoList();
  document.querySelector(".toDoForm").addEventListener("submit", createToDo);
}

init();
