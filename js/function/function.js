import {tasks} from '../data/TaskList.js';
import {render} from '../index.js';


function addTask(){

    let btnadd = document.getElementById("add-task")
    btnadd.addEventListener("click",()=>{

       let task = prompt("Enter the task name: ", "No tasks added yet.")
       tasks.push({ name: task, date: new Date().toLocaleDateString() });
       console.log(tasks);
       render();
    })

}
//

function updateTask(){

    let btnUpdate = document.querySelector(".js-btn-update")
    btnUpdate.addEventListener("click",()=>{

        console.log("the elemet click");
        

    })
}


function checkTask(){

    let btnCheck = document.querySelector(".js-btn-check")
    btnCheck.addEventListener("click",()=>{

        console.log("the elemet click");
        

    })
}


function deleteTask(){

    let btnDelete = document.querySelector(".js-btn-delete")
    btnDelete.addEventListener("click",()=>{

        console.log("the elemet click");
        

    })
}
export {addTask , updateTask , checkTask , deleteTask};