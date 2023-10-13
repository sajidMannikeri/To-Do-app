const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");

//This will be the tasks that will be added as the user goes on adding
// It will be an array of objects [{title: "Title1", description: "description1"}]
const tasks = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];
  updateTaskList();

form.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  removeExitsTasks();
  tasks.push({
    title: title.value,
    description: description.value,
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  updateTaskList();
}

function updateTaskList() {
  tasks.forEach((value, index) => {
    const div = document.createElement("div");
    div.setAttribute("class", "tasks");
    const innerDiv = document.createElement("div");
    div.append(innerDiv);
    const h2 = document.createElement("h2");
    h2.innerText = value.title;
    innerDiv.append(h2);
    const span = document.createElement("span");
    span.innerText = value.description;
    innerDiv.append(span);
    const button = document.createElement("button");
    button.setAttribute("class", "deleteButton");
    button.innerText = "Delete";
    div.append(button);
    button.addEventListener("click", () => {
      removeExitsTasks();
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      updateTaskList();
    });
    container.append(div);
    console.log(value);
  });
}

function removeExitsTasks() {
  tasks.forEach(() => {
    const div = document.querySelector(".tasks");
    div.remove();
  });
}
