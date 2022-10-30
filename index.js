let toDoList = [];
const loadedToDoList = localStorage.getItem("toDoList");

function saveToDo(toDo) {
  const toDoObj = {
    text: toDo,
    id: toDoList.length + 1,
  };
  toDoList.push(toDoObj);
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
}

function createToDo(event) {
  // submit시 새로고침 방지
  // event.preventDefault();
  const toDo = document.querySelector("form.toDoForm > input").value;
  paintToDo(toDo);
  saveToDo(toDo);
  document.querySelector("form.toDoForm > input").value = "";
}

function paintToDo(toDo) {
  const lists = document.querySelector("#lists")
  const list = document.createElement("div");
  const input = document.createElement("input");
  const activeDiv = document.createElement("div");
  const retextButton = document.createElement("button")
  const deleteButton = document.createElement("button");

  input.placeholder = toDo;
  retextButton.innerHTML = "수정";
  deleteButton.innerHTML = "삭제";

  activeDiv.appendChild(retextButton);
  activeDiv.appendChild(deleteButton);

  list.appendChild(input);
  list.appendChild(activeDiv);
  lists.appendChild(list);

  list.classList.add('list');
  retextButton.classList.add('retextButton');
  deleteButton.classList.add('deleteButton');

  input.disabled = true;
}

function loadToDoList() {
  if (loadedToDoList !== null) {
    const parsedToDoList = JSON.parse(loadedToDoList);
    for (let toDo of parsedToDoList) {
      const { text } = toDo;
      paintToDo(text);
      saveToDo(text);
    }

    const a = document.querySelectorAll('.retextButton');

    for(let i=0; i<a.length; i++){
      a[i].addEventListener('click', () => {
        reTextToDo()
      })
    }
  }
}



function reTextToDo() {
  console.log(1)
}

function deleteToDo() {}

function init() {
  loadToDoList();
  document.querySelector(".toDoForm").addEventListener("submit", createToDo);
}

init();
