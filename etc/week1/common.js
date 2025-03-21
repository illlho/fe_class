// 동적으로 탭 메뉴를 생성하는 함수
function createTabs() {
    const tabsContainer = document.getElementById('tabs');
    const tabs = [
        { id: 'main', name: '메인', content: '../../index.html' },
        { id: 'basicTags', name: 'HTML 기본 태그', content: '../step1/index.html' },
        { id: 'cssBasicTags', name: 'CSS 기본 태그', content: 'css-basics.html' },
        { id: 'javascriptBasic', name: 'JavaScript 기초', content: 'js-basics.html' }
    ];

    tabs.forEach(tab => {
        const button = document.createElement('button');
        button.textContent = tab.name;

        if (id != '' && id == tab.id) {
            button.setAttribute('style', 'background-color: #8cbf92; color: #243b27; font-weight: 500;');
        } else {
            button.setAttribute('style', 'font-weight: 200;');
        }

        if (tab.id == 'main') {
            button.setAttribute('style', 'background-color: #457d4c; color: #fff; font-weight: 700;');
        }

        button.addEventListener('click', () => {
            window.location.href = tab.content;
        });
        tabsContainer.appendChild(button);
    });
}

// 페이지가 로드되면 탭 생성
window.onload = createTabs;
