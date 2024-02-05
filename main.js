function addTask() {
    var newTaskText = document.getElementById('newTask').value;
    if(newTaskText.trim() === ''){
        alert('Please enter a note');
        return;
    }


    // Create a new task 
    var taskContainer = document.getElementById('tasks');
    var taskElement = document.createElement('div');
    taskElement.className = 'task';

    // Checkbox
    var Checkbox = document.createElement('input');
    Checkbox.type = 'checkbox';

    var taskText = document.createElement('label');
    taskText.textContent = newTaskText;


    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        deleteTask(taskElement);
    };

    taskElement.appendChild(Checkbox);
    taskElement.appendChild(taskText);
    taskElement.appendChild(deleteButton);

    taskContainer.appendChild(taskElement);

    document.getElementById('newTask').value = '';
}

function deleteTask(taskElement) {
    var taskContainer = document.getElementById('tasks');
    taskContainer.removeChild(taskElement);
}