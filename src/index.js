import './style.css';

const todoTasks = [
  { index: 1, type: 'Code Development', completed: true },
  { index: 2, type: 'Code Testing', completed: false },
  { index: 3, type: 'Code Maintenance', completed: true },
];

const todoHolder = document.querySelector('.main-holder');

const todos = todoTasks.map((todo) => `
  <div class="todoTasks">
    <div class="task"><input type="checkbox" id="checkBox" name="checkbox" value="1">
      <label for="checkBox">${todo.type}</label>
    </div>
    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
  </div>
`).join('');

todoHolder.innerHTML = todos;
