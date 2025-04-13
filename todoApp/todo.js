function createTodo() {
    let todoInput = document.getElementById('todo-input')
    let inputText = todoInput.value

    if (inputText == '') {
        alert('할 일을 입력해 주세요!')
        return false
    }

    let todoList = document.getElementById('todo-list')
    let newTodo = document.createElement('li')
    newTodo.innerText = inputText

    todoList.appendChild(newTodo)

    todoInput.value = ''
}

function editItem(button) {
    // closest : 상위 요소 탐색. li를 매개변수로 전달하면 li를 찾을때 까지 탐색 진행
    const li = button.closest('li');

    // querySelector : css 선택자 문법으로 HTML 요소를 '하나' 찾아 주는 함수. 조건에 맞는 첫 번째 요소 하나만을 가져온다.
    const textSpan = li.querySelector('.todo-text');

    // 사용자에게 입력을 요구하는 팝업창을 띄움
    const newText = prompt('할 일을 수정하세요:', textSpan.textContent);
    if (newText !== null && newText.trim() !== '') {
        textSpan.textContent = newText.trim();
    }
}

function deleteItem(button) {
    const li = button.closest('li');

    // 요소를 삭제
    li.remove();
}

function toggleComplete(checkbox) {
    // 현재 요소의 다음 형제 요소를 가져옴
    const text = checkbox.nextElementSibling;

    // 체크 여부에 따라 토글
    text.classList.toggle('completed', checkbox.checked);
}