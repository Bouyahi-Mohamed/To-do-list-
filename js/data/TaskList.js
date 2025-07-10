export let tasks = JSON.parse(localStorage.getItem("tasks")) || [{
    id: 1,
    name: "Example Task",
    date: new Date().toLocaleDateString(),
    completed: false
},
];
