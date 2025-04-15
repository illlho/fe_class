// todo 리스트를 매개변수로 받아서 storage에 저장하는 함수
function setTodoList(todoList) {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

// 저장된 todo 리스트를 storage에서 가져오는 함수
function getAllTodoList() {
    if (localStorage.getItem('todoList') == null) {
        return []
    } else {
        JSON.parse(localStorage.getItem('todoList'))
    }
}

// todo의 마지막 고유 id를 기록하는 함수
function setLastId(lastId) {
    localStorage.setItem('lastId', lastId)
}

// todo의 마지막 고유 id를 가져오는 함수
function getLastId() {
    if (localStorage.getItem('lastId') == null) {
        return 0
    } else {
        JSON.parse(localStorage.getItem('lastId'))
    }
}

// todo를 storage에 insert 하거나 update 하는 함수 : insert + update = upsert
function upsertTodo(todo) {
    // 각각의 todo에 고유한 id를 부여하기 위해 생성할 때마다 +1을 해준다
    let id = getLastId() + 1;

    // 만약 todo에 이미 id 값이 있다면 그 값으로 대체
    if (todo['id'] != '') {
        id = todo['id']
    } else {

    }

    // 전체 todo 리스트를 가져옴
    let todoList = getAllTodoList();

    // 기존 todo 리스트에 같은 id를 가진 todo 가 존재한다면 새로 생성(insert)하는 것이 아닌 수정(update)을 진행
    let todoIndex = todoList.findIndex(item => item.id == id);

    if (todoIndex > -1) { // 같은 id가 이미 존재하는 경우 수정(update)
        todoList[todoIndex] = todo;
    } else { // 같은 id가 없는 경우 생성(insert)
        todo['id'] = id
        todoList.push(todo);
    }

    // 수정된 todo 리스트를 storage에 반영
    setTodoList(todoList);

    // 새롭게 생성일 경우에만, 생성이 성공적으로 완료 되었다면 현시점의 lastId를 저장 해준다.
    if (todoIndex > -1) {
        setLastId(id)
    }
}