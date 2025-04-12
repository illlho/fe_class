function createTodo() {
    // 1. 입력창 요소 가져오기
    let 입력창 = document.getElementById('todo-input');

    // 2. 입력창에 사용자가 입력한 텍스트 가져오기
    let 입력내용 = 입력창.value.trim(); // 양쪽 공백 제거

    // 3. 입력이 비어있으면 추가하지 않음
    if (입력내용 === "") {
        alert("할 일을 입력해주세요!");
        return;
    }

    // 4. 할 일 목록(ul 요소) 가져오기
    let 할일목록 = document.getElementById("todo-list");

    // 5. 새로운 li 요소 생성
    let 새할일 = document.createElement("li");

    // 6. li 요소에 입력된 내용을 넣기
    새할일.innerText = 입력내용;

    // 7. li 요소를 ul 목록에 추가하기
    할일목록.appendChild(새할일);

    // 8. 입력창 비워주기 (다음 입력을 위해)
    입력창.value = "";
}

document.getElementById("todo-input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        createTodo();
    }
})