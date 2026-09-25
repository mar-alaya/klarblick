const total_tasks = document.querySelector("#total-tasks");
const total_todo_tasks = document.querySelector("#total-todo");
const total_finished_tasks = document.querySelector("#total-finished");

const tasks_list = document.querySelector("ol");

let tasks = [
  {
    id: 1,
    name: "Write invoices",
    description: "Coordinate the payments of the stakeholders.",
    priority: "High",
    finished: false,
  },
  {
    id: 2,
    name: "Check emails",
    description: "Reply only the most important ones.",
    priority: "Middle",
    finished: false,
  },
  {
    id: 3,
    name: "Start project 1",
    description: "Design a web",
    priority: "High",
    finished: true,
  },
  {
    id: 4,
    name: "Continue project 2",
    description: "Create a webapp",
    priority: "Low",
    finished: true,
  },
  {
    id: 5,
    name: "Meeting with Markus",
    description: "New content",
    priority: "Middle",
    finished: true,
  },
];

// Tasks List

for (let i = 0; i < tasks.length; i++) {
  let li = document.createElement("li");

  let title = document.createElement("div");
  title.innerText = tasks[i].name;
  title.className = "task-title";
  li.appendChild(title);

  let description = document.createElement("div");
  description.innerText = tasks[i].description;
  description.className = "task-subtitle";
  li.appendChild(description);

  let priority = document.createElement("div");
  if (!tasks[i].finished) {
    if (tasks[i].priority === "High") {
      priority.innerText = "High";
      priority.className = "badge-high";
    } else if (tasks[i].priority === "Middle") {
      priority.innerText = "Middle";
      priority.className = "badge-middle";
    } else {
      priority.innerText = "Low";
      priority.className = "badge-low";
    }
  }
  li.appendChild(priority);

  let finished_btn = document.createElement("button");
  if (!tasks[i].finished) {
    finished_btn.innerText = "✔︎ Finish Task";
    finished_btn.classList = "finished-btn";
    li.appendChild(finished_btn);
    finished_btn.addEventListener("click", () => {
      li.classList = "task-finished";
      finished_btn.style.display = "none";
      priority.style.display = "none";
      tasks[i].finished = true;
      delete_btn.style.display = "none";
      counter();
    });
  }

  let delete_btn = document.createElement("button");
  if (!tasks[i].finished) {
    delete_btn.innerText = "♻︎ Delete Task";
    delete_btn.classList = "delete-btn";
    li.appendChild(delete_btn);

    delete_btn.addEventListener("click", () => {
      tasks = tasks.filter((task) => task.id !== tasks[i].id);
      li.style.display = "none";
      counter();
    });
  }

  // Filter schau alle tasks von der Array und behaltet nur die tasks die die Bedienung treffen ("ist es nicht gleich als tasks[i].id? Dann behalte ich")

  tasks_list.appendChild(li);
  counter();

  if (tasks[i].finished) {
    li.classList = "task-finished";
  } else {
    li.classList = "task-card";
  }
}

// Create a new Task Flow

const create_name = document.querySelector("#form-name");
const create_description = document.querySelector("#form-description");
const create_priority = document.querySelector("#form-priority");
const create_task_btn = document.querySelector("#create-task");

create_task_btn.addEventListener("click", () => {
  const input_name = create_name.value;
  const input_description = create_description.value;
  const input_priority = create_priority.value;

  console.log(typeof input_priority);

  let newTask = {
    id: tasks.length + 1,
    name: input_name,
    description: input_description,
    priority: input_priority,
    finished: false,
  };

  let li = document.createElement("li");

  let title = document.createElement("div");
  title.innerText = input_name;
  title.className = "task-title";
  li.appendChild(title);

  let description = document.createElement("div");
  description.innerText = input_description;
  description.className = "task-subtitle";
  li.appendChild(description);

  let priority = document.createElement("div");
  if (input_priority === "high") {
    priority.innerText = "High";
    priority.className = "badge-high";
  } else if (input_priority === "medium") {
    priority.innerText = "Medium";
    priority.className = "badge-middle";
  } else {
    priority.innerText = "low";
    priority.className = "badge-low";
  }
  li.appendChild(priority);
  li.className = "task-card";

  let finished_btn = document.createElement("button");
  finished_btn.innerText = "✔︎ Finish Task";
  finished_btn.classList = "finished-btn";
  li.appendChild(finished_btn);
  finished_btn.addEventListener("click", () => {
    li.classList = "task-finished";
    finished_btn.style.display = "none";
    priority.style.display = "none";
    newTask.finished = true;
    delete_btn.style.display = "none";
    counter();
  });

  let delete_btn = document.createElement("button");
  delete_btn.innerText = "♻︎ Delete Task";
  delete_btn.classList = "delete-btn";
  li.appendChild(delete_btn);

  delete_btn.addEventListener("click", () => {
    tasks = tasks.filter((task) => task.id !== newTask.id);
    li.style.display = "none";
    counter();
  });

  tasks_list.appendChild(li);
  tasks.push(newTask);
  counter();
});

// Tasks Counter

function counter() {
  let total_counter = tasks.length;
  let todo_counter = 0;
  let finished_counter = 0;

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].finished === false) {
      todo_counter++;
    } else {
      finished_counter++;
    }
  }

  total_tasks.innerText = total_counter;
  total_todo_tasks.innerText = todo_counter;
  total_finished_tasks.innerText = finished_counter;
}
