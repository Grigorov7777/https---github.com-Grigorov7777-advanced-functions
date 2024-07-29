document.getElementById('add-button').addEventListener('click', function() {
  const input = document.getElementById('todo-input');
  const task = input.value.trim();
  
  if (task !== '') {
      const todoList = document.getElementById('todo-list');
      const newTask = document.createElement('li');
      newTask.textContent = task;
      
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remove-button');
      
      removeButton.addEventListener('click', function() {
          newTask.remove();
      });
      
      newTask.appendChild(removeButton);
      todoList.appendChild(newTask);
      
      input.value = '';
  }
});
