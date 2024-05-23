function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value === '') {
        alert("Please enter a task");
        return;
    }

    var li = document.createElement("li");
    var textNode = document.createTextNode(taskInput.value);
    li.appendChild(textNode);

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };
    li.appendChild(deleteButton);

    li.onclick = function() {
        li.classList.toggle("completed");
    };

    taskList.appendChild(li);
    taskInput.value = '';
}
