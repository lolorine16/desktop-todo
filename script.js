const input = document.getElementById('new-task-input');
const addBtn = document.getElementById('add-task-button');
const todoList = document.getElementById('task-list');

// funtion for add task button
addBtn.addEventListener('click', () => {
  const taskText = input.value.trim();
  if (value === "") return alert("Enter txt");
  
  // create a list 
  const li = createTaskElement('li');
  li.innerHTML = `
    <span class="text-secondary text-md">${taskText}</span>
    <button class="text-danger">🗑</button>
  `;

  todoList.appendChild(li);
  input.value = '';
});
