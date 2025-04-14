function getAllTodoList() {
    return JSON.parse(localStorage.getItem('todoList') || '[]');
}

function getLastId() {
    const todoList = getAllTodoList();
    return todoList.length == 0 ? 0 : todoList[todoList.length - 1].id;
}

function setTodoList(todoList) {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

function upsertTodo(todo) {
    let id = todo['id'] || getLastId() + 1;
    let todoList = getAllTodoList();

    let todoIndex = todoList.findIndex(item => item.id === id);
    if (todoIndex > -1) {
        todoList[todoIndex] = todo;
    } else {
        todoList.push({ id, ...todo });
    }
    setTodoList(todoList);
}