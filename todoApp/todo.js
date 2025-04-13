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









function createTodo() {
    let todoInput = document.getElementById('todo-input')
    let inputText = todoInput.value

    if (inputText.trim() === '') {
        alert('할 일을 입력해 주세요!')
        return false
    }

    let todoList = document.getElementById('todo-list')
    let newTodo = document.createElement('li')

    // 체크박스 생성
    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.setAttribute('onchange', 'toggleComplete(this)')

    // div 생성
    let div = document.createElement('div')

    // 할 일 텍스트 span 생성
    let todoText = document.createElement('span')
    todoText.className = 'todo-text'
    todoText.innerText = inputText

    // 버튼 그룹 span 생성
    let buttonGroup = document.createElement('span')

    // 수정 버튼 생성
    let editBtn = document.createElement('button')
    editBtn.className = 'btn edit-btn'
    editBtn.innerText = '수정'
    editBtn.setAttribute('onclick', 'editItem(this)')

    // 삭제 버튼 생성
    let deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn delete-btn'
    deleteBtn.innerText = '삭제'
    deleteBtn.setAttribute('onclick', 'deleteItem(this)')

    // 버튼 그룹에 버튼들 추가
    buttonGroup.appendChild(editBtn)
    buttonGroup.appendChild(deleteBtn)

    // div에 텍스트와 버튼 그룹 추가
    div.appendChild(todoText)
    div.appendChild(buttonGroup)

    // li에 체크박스와 div 추가
    newTodo.appendChild(checkbox)
    newTodo.appendChild(div)

    // 리스트에 추가
    todoList.appendChild(newTodo)

    // 입력창 초기화
    todoInput.value = ''
}
