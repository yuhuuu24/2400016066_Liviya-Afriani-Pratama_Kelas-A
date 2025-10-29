// Add Task
function addTask() {
    let taskInput = document.getElementById("newTask");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let li = document.createElement("li");
    li.textContent = taskText;

    // Mark as completed
    li.onclick = function () {
        li.classList.toggle("completed");
    };

    // Delete button
    let span = document.createElement("span");
    span.textContent = "X";
    span.className = "close";
    span.onclick = function (event) {
        event.stopPropagation();
        li.remove();
    };

    // Edit feature
    li.ondblclick = function () {
        let editText = prompt("Edit task:", li.firstChild.textContent);
        if (editText !== null) {
            li.firstChild.textContent = editText;
        }
    };

    li.appendChild(span);
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

// Change background color
document.getElementById("bgColorSelector").onchange = function () {
    document.body.style.backgroundColor = this.value;
};

// Font size control
document.getElementById("fontSizeControl").oninput = function () {
    document.body.style.fontSize = this.value + "px";
};

// Toggle dark mode
document.getElementById("darkModeToggle").onclick = function () {
    document.body.classList.toggle("dark-mode");
};

// Change font style
document.getElementById("fontStyleSelector").onchange = function () {
    document.body.style.fontFamily = this.value;
};