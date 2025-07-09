

import {addTask , updateTask , checkTask , deleteTask} from './function/function.js';
let html = '';
function render() {
    
 console.log('Hello, World!');
 addTask()
 updateTask()
 checkTask()
 deleteTask()
 render
}
render();

export { render };