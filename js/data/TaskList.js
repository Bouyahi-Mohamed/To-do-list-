export let tasks = JSON.parse(localStorage.getItem("tasks")) || [{
    name: 'Task 1',
    date: '2023-10-01',
    completed: false
},
];
