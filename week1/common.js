// 동적으로 탭 메뉴를 생성하는 함수
function createTabs() {
    const tabsContainer = document.getElementById('tabs');
    const tabs = [
        { name: 'HTML 기본 태그', content: 'html-basics.html' },
        { name: 'CSS 기본 태그', content: 'css-basics.html' },
        { name: 'JavaScript 기초', content: 'js-basics.html' }
    ];

    tabs.forEach(tab => {
        const button = document.createElement('button');
        button.textContent = tab.name;
        button.addEventListener('click', () => {
            window.location.href = tab.content;
        });
        tabsContainer.appendChild(button);
    });
}

// 페이지가 로드되면 탭 생성
window.onload = createTabs;
