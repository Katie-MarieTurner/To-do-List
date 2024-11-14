
const inputTextField = document.getElementById("inputTextField");

const addTaskBtn = document.getElementById("addTaskBtn");

const taskList = document.getElementById("taskList");

const removeCompletedBtn = document.getElementById("removeCompletedBtn");

addTaskBtn.addEventListener("click", e => {
    const inputText = inputTextField.value.trim(); 
    if (inputText === "") { 
        inputTextField.value = ("Example Task."); 
}  else { 
    const li = document.createElement("li");
    li.textContent = inputText;
    taskList.appendChild(li);
    inputTextField.value = "";
        if (taskList.children.length > 0) {
            taskList.style.display = "block";
    }
} });

inputTextField.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        const inputText = inputTextField.value.trim(); 
        if (inputText === "") { 
            inputTextField.value = ("Example Task"); 
        } else { 
            const li = document.createElement("li");
            li.textContent = inputText;
            taskList.appendChild(li);
            inputTextField.value = "";
                if (taskList.children.length > 0) {
                    taskList.style.display = "block";
                }
        }
    }
});

taskList.onclick = toggleCompleted;
function toggleCompleted(event) { 
    if (event.target.tagName === "LI") { 
        event.target.classList.toggle("completed"); }};

removeCompletedBtn.addEventListener("click", e=> {
const completedTask = document.querySelectorAll(".completed");
    completedTask.forEach(task =>{
        task.remove();
    });
        if (taskList.children.length === 0) {
            taskList.style.display = "none";
    }
});
