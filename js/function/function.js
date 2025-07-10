import {tasks} from '../data/TaskList.js';
import {render} from '../index.js';


function addTask(){

    let btnadd = document.getElementById("add-task")
    btnadd.addEventListener("click",()=>{

           let task = prompt("Enter the task name: ", "No tasks added yet.");
       if (task && task.trim() !== "") {
           tasks.push(
                    {   id: tasks.length + 1, // Incremental ID based on current length
                        name: task.trim(),
                        date: new Date().toLocaleDateString() ,
                        completed: false
                    }
                    );
           localStorage.setItem("tasks", JSON.stringify(tasks));
           render();
       }
    })
}
//

function updateTask(){

    let btnUpdate = document.querySelectorAll(".js-btn-update")
    btnUpdate.forEach((button,index) => {
        button.addEventListener("click",()=>{

            let newTaskName = prompt(`you are about to change ${tasks[index].name}: `, tasks[index].name);
            if (newTaskName && newTaskName.trim() !== "") {
                tasks[index].name = newTaskName.trim();
                tasks[index].date = new Date().toLocaleDateString(); // Update date to current date
                // Update the task in localStorage
                localStorage.setItem("tasks", JSON.stringify(tasks));
                render();
            }
        })
    })

}


function checkTask(){

    let btnCheck = document.querySelectorAll(".js-btn-check")
    btnCheck.forEach((button,index) => {
        button.addEventListener("click",()=>{

            tasks[index].completed = !tasks[index].completed;
            localStorage.setItem("tasks", JSON.stringify(tasks));
            render();

        })
    })

}
// Function to delete a task
// This function will remove the task from the tasks array and update localStorage

function deleteTask(){

    let btnDelete = document.querySelectorAll(".js-btn-delete")
    btnDelete.forEach((button,index) => {
        button.addEventListener("click",()=>{
        // Remove the task from the tasks array
        // and update localStorage
        // Ask for confirmation before deleting
        var ask = confirm("Are you sure you want to delete this task?");
        if (!ask) return; // If user cancels, do nothing
        
        // Remove the task from the tasks array
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        render();

    })
})}
export {addTask , updateTask , checkTask , deleteTask};