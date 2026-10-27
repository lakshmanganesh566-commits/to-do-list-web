const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const clearBtn = document.getElementById("clearBtn");
const emptyMessage = document.getElementById("emptyMessage");

let tasks = JSON.parse(localStorage.getItem("todoTasks")) || [];

function saveTasks() {
  localStorage.setItem("todoTasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = `task ${task.completed ? "completed" : ""}`;

    li.innerHTML = `
      <input type="checkbox" class="task-checkbox"
             ${task.completed ? "checked" : ""}
             aria-label="Mark task complete">

      <span class="task-text"></span>

      <div class="actions">
        <button class="action-btn edit-btn">Edit</button>
        <button class="action-btn delete-btn">Delete</button>
      </div>
    `;

    li.querySelector(".task-text").textContent = task.text;

    li.querySelector(".task-checkbox").addEventListener("change", () => {
      task.completed = !task.completed;
      saveTasks();
      renderTasks();
    });

    li.querySelector(".edit-btn").addEventListener("click", () => {
      const newText = prompt("Edit your task:", task.text);

      if (newText !== null && newText.trim() !== "") {
        task.text = newText.trim();
        saveTasks();
        renderTasks();
      }
    });

    li.querySelector(".delete-btn").addEventListener("click", () => {
      tasks = tasks.filter((item) => item.id !== task.id);
      saveTasks();
      renderTasks();
    });

    taskList.appendChild(li);
  });

  const remaining = tasks.filter((task) => !task.completed).length;
  taskCount.textContent = `${remaining} ${remaining === 1 ? "task" : "tasks"} remaining`;
  emptyMessage.style.display = tasks.length === 0 ? "block" : "none";
}

function addTask() {
  const text = taskInput.value.trim();

  if (text === "") {
    taskInput.focus();
    return;
  }

  tasks.push({
    id: Date.now(),
    text: text,
    completed: false
  });

  saveTasks();
  renderTasks();

  taskInput.value = "";
  taskInput.focus();
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

clearBtn.addEventListener("click", () => {
  if (tasks.length === 0) return;

  if (confirm("Are you sure you want to delete all tasks?")) {
    tasks = [];
    saveTasks();
    renderTasks();
  }
});

renderTasks();
