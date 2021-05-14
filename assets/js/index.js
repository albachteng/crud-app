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
        const toSave = [];
        console.log(list.children);
        for (let i = 0; i < list.children.length; i += 1) {
            toSave.push({toDo: list.children[i].innerHTML});
        }
        console.log(toSave);
        fetch('/api', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(toSave),
        })
            .then(response => response.json())
            .then(data => console.log(data))
    });
});

const buildToDo = (toDoObject) => {
    const newTodo = document.createElement('li');
    newTodo.innerHTML = toDoObject.toDo;
    list.appendChild(newTodo);
}

