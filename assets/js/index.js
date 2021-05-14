const list = document.getElementById('list');
const save = document.getElementById('save'); 

document.addEventListener('DOMContentLoaded', e => {
    fetch('/api')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.forEach(item => {
                buildToDo(item);
            });
        })

    save.addEventListener('click', e => {
        e.
    })
});

const buildToDo = (toDoObject) => {
    const newTodo = document.createElement('li');
    newTodo.innerHTML = toDoObject.toDo;
    list.appendChild(newTodo);
}

