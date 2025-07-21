// To-do List
(function () {
  const app = document.getElementById("todo-app");
  app.innerHTML = `<input class='todo-input' id='todo-input' placeholder='Add a task...'><button class='todo-btn' id='add-todo'>Add</button><ul class='todo-list' id='todo-list'></ul>`;
  const input = document.getElementById("todo-input");
  const addBtn = document.getElementById("add-todo");
  const list = document.getElementById("todo-list");
  let todos = [];
  function render() {
    list.innerHTML = todos
      .map(
        (t, i) =>
          `<li class='todo-item'><span class='${
            t.done ? "todo-completed" : ""
          }' onclick='window.toggleTodo(${i})'>${
            t.text
          }</span><button onclick='window.removeTodo(${i})'>Remove</button></li>`
      )
      .join("");
  }
  window.toggleTodo = (i) => {
    todos[i].done = !todos[i].done;
    render();
  };
  window.removeTodo = (i) => {
    todos.splice(i, 1);
    render();
  };
  addBtn.onclick = () => {
    if (input.value.trim()) {
      todos.push({ text: input.value, done: false });
      input.value = "";
      render();
    }
  };
})();

// Form Validator
(function () {
  const app = document.getElementById("validator-app");
  app.innerHTML = `<form id='form'><input type='email' id='email' placeholder='Email'><div class='validator-error' id='email-error'></div><input type='password' id='password' placeholder='Password'><div class='validator-error' id='pass-error'></div><button type='submit'>Validate</button></form>`;
  const form = document.getElementById("form");
  form.onsubmit = (e) => {
    e.preventDefault();
    let valid = true;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    document.getElementById("email-error").innerText = "";
    document.getElementById("pass-error").innerText = "";
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
      document.getElementById("email-error").innerText = "Invalid email.";
      valid = false;
    }
    if (password.length < 6) {
      document.getElementById("pass-error").innerText =
        "Password must be at least 6 characters.";
      valid = false;
    }
    if (valid) alert("Form is valid!");
  };
})();

// Simple Quiz
(function () {
  const app = document.getElementById("quiz-app");
  const questions = [
    { q: "Capital of France?", o: ["Paris", "London", "Berlin"], a: 0 },
    { q: "2 + 2 = ?", o: ["3", "4", "5"], a: 1 },
    { q: "Color of the sky?", o: ["Blue", "Green", "Red"], a: 0 },
  ];
  let idx = 0,
    score = 0;
  function render() {
    if (idx >= questions.length) {
      app.innerHTML = `<div class='quiz-score'>Score: ${score}/${questions.length}</div>`;
      return;
    }
    const q = questions[idx];
    app.innerHTML = `<div class='quiz-question'>${
      q.q
    }</div><ul class='quiz-options'>${q.o
      .map(
        (opt, i) =>
          `<li><button onclick='window.answerQuiz(${i})'>${opt}</button></li>`
      )
      .join("")}</ul>`;
  }
  window.answerQuiz = (i) => {
    if (i === questions[idx].a) score++;
    idx++;
    render();
  };
  render();
})();

// Theme Switcher
(function () {
  const app = document.getElementById("theme-app");
  app.innerHTML = `<button class='theme-btn' id='light-btn'>Light Mode</button><button class='theme-btn' id='dark-btn'>Dark Mode</button>`;
  document.getElementById("light-btn").onclick = () => {
    document.body.classList.remove("dark-mode");
  };
  document.getElementById("dark-btn").onclick = () => {
    document.body.classList.add("dark-mode");
  };
})();
