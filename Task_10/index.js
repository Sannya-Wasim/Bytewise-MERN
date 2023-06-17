// DOM elements
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector(".todos");
const totalTasks = document.querySelector("#total-tasks");
const completedTasks = document.querySelector("#completed-tasks");
const remainingTasks = document.querySelector("#remaining-tasks");
const mainInput = document.querySelector("#todo-form input");

// take an object from local storage and parse it and if it exists, change it into an array and place them in tasks otherwise tasks will be an aempty array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// if we have items in local storage then we go through each task and display them all i the HTML
if (localStorage.getItem("tasks")) {
  tasks.map((task) => {
    createTask(task);
  });
}

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = mainInput.value;

  if (inputValue == " ") {
    return;
  }

  const task = {
    id: new Date().getTime(),
    name: inputValue,
    isCompleted: false,
  };

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  console.log(task);

  createTask(task);
  todoForm.reset();
  mainInput.focus();
});

todoList.addEventListener("click", (e) => {
  // if i click on the remove button
  if (
    e.target.classList.contains("remove-task") ||
    e.target.ParentElement.classList.contains("remove-task") ||
    e.target.ParentElement.ParentElement.classList.contains("remove-task")
  ) {
    const taskId = e.target.closest("li").id;

    removeTask(taskId);
  }
});

// Update the task
todoList.addEventListener("input", (e) => {
  const taskId = e.target.closest("li").id;
  updateTask(taskId, e.target);
});

function createTask(task) {
  // 1. create a list element
  // 2. give it the proper attributes like ID
  // 3. if the task is completed, give it a class of complete
  // 4. create the correct markup
  // 5. then add it to the html

  const taskElement = document.createElement("li");

  taskElement.setAttribute("id", task.id);

  if (task.isCompleted) {
    taskElement.classList.add("complete");
  }

  const taskElementMarkup = `
  <div class="bg-white p-4 rounded-sm align-middle">
    <input
        type="checkbox"
        name="tasks"
        id="${task.id}" 
        ${task.isCompleted ? "checked" : ""}
        class="mr-2 align-middle"
    />
    <span ${!task.isCompleted ? "contenteditable" : ""}>${task.name}</span>
    <button title="Remove ${task.name} task">rem
        <svg class="remove-task" viewBox="0 0 24 24" fill="none">
            <path d="M17.25 17.25L6.75 6.75" stroke="#A4D0E3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.25 6.75L6.75 17.25" stroke="#A4d0E3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </button>
 </div>
`;

  taskElement.innerHTML = taskElementMarkup;

  todoList.appendChild(taskElement);

  countTasks();
}

function countTasks() {
  // count how many tasks are there
  const completedTasksArray = tasks.filter((task) => {
    task.isCompleted === true;
  });

  totalTasks.textContent = tasks.length;
  completedTasks.textContent = completedTasksArray.length;
  remainingTasks.textContent = tasks.length - completedTasksArray.length;
}

function removeTask(taskId) {
  // 1. first we are gonna take it out of the tasks array
  // 2. then we are gonna update the local storage
  // 3. remove that task the actual page

  // recreate the tasks array without the one we wanted to remove
  tasks = tasks.filter((task) => task.id !== parseInt(taskId));

  localStorage.setItem("tasks", JSON.stringify(tasks));

  document.getElementById(taskId).remove();
  countTasks();
}
function updateTask(taskId, el) {
  const task = tasks.find((task) => task.id === parseInt(taskId));

  if (el.hasAttribute("contenteditable")) {
    task.name = el.textContent;
  } else {
    // it means we clicked on the chekbox
    const span = el.nextElementSibling;
    const parent = el.closest("li");

    task.isCompleted = !task.isCompleted;

    if (task.isCompleted) {
      span.removeAttribute("contenteditable");
      parent.classList.add("complete");
    } else {
      span.setAttribute("contenteditable", "true");
      parent.classList.remove("complete");
    }
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));

  countTasks();
}
