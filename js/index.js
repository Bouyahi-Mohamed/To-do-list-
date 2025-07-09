
import {tasks} from './data/TaskList.js';
import {addTask , updateTask , checkTask , deleteTask} from './function/function.js';
let html = '';
function render() {
    for (let i = 0; i < tasks.length; i++) {

    html += `
    <div id="task-list-items">
        <div id="show-task">
            <div id="name-task">${tasks[i].name}</div>
            <div id="date-task">date : <span>${tasks[i].date}</span> </div>
        </div>
        <div id="imgs-task">
            <button class="btn-task js-btn-update"><img class="img-task" src="../image/icon/edit-tools.png" alt=""></button>
            <button class="btn-task js-btn-check"><img class="img-task" src="../image/icon/check.png" alt=""></button>
            <button class="btn-task js-btn-delete"><img class="img-task" src="../image/icon/delete.png" alt=""></button>
        </div>
          
    </div>

    `;
    }
    document.getElementById('task-list').innerHTML = html;
    html = ''; // Reset html for next render

 
}
render();
 addTask();
 updateTask();
 checkTask();
 deleteTask();

export { render };