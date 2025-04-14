// DOM 요소 가져오기
const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');
const showAllBtn = document.getElementById('showAllBtn');
const showCompletedBtn = document.getElementById('showCompletedBtn');
const showActiveBtn = document.getElementById('showActiveBtn');

// 할 일 목록을 저장하는 배열 (로컬 스토리지에서 불러오기)
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// 할 일 객체 생성
function createTodoElement(todo) {
    const li = document.createElement('li');
    li.dataset.id = todo.id;

    const text = document.createElement('span');
    text.textContent = todo.text;

    const completeBtn = document.createElement('button');
    completeBtn.textContent = todo.completed ? '취소' : '완료';
    completeBtn.onclick = () => toggleComplete(todo.id);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '삭제';
    deleteBtn.onclick = () => deleteTodo(todo.id);

    li.appendChild(text);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    return li;
}

// 리스트 갱신
function renderTodos(filter = 'all') {
    todoList.innerHTML = ''; // 기존 목록 지우기

    // 필터링
    const filteredTodos = todos.filter(todo => {
        if (filter === 'completed') return todo.completed;
        if (filter === 'active') return !todo.completed;
        return true;
    });

    // 할 일 목록 출력
    filteredTodos.forEach(todo => {
        const todoElement = createTodoElement(todo);
        todoList.appendChild(todoElement);
    });
}

// 할 일 추가
function addTodo() {
    const text = todoInput.value.trim();
    if (text === '') return;

    const newTodo = {
        id: Date.now(),
        text,
        completed: false,
    };

    todos.push(newTodo);
    saveTodos();
    renderTodos();
    todoInput.value = ''; // 입력창 초기화
}

// 할 일 완료 상태 변경
function toggleComplete(id) {
    const todo = todos.find(todo => todo.id === id);
    todo.completed = !todo.completed;
    saveTodos();
    renderTodos();
}

// 할 일 삭제
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveTodos();
    renderTodos();
}

// 로컬 스토리지에 저장
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// 필터링 기능
showAllBtn.onclick = () => renderTodos('all');
showCompletedBtn.onclick = () => renderTodos('completed');
showActiveBtn.onclick = () => renderTodos('active');

// 페이지 로드 시 할 일 목록 렌더링
renderTodos();

// 할 일 추가 버튼 클릭 시
addTodoBtn.onclick = addTodo;

// 엔터키로 추가할 수 있도록
todoInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') addTodo();
});
