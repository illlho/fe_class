// '주차 더 보기' 버튼 클릭 시, 주차를 더 추가하는 기능
document.getElementById('showMoreBtn').addEventListener('click', function () {
    const weekList = document.getElementById('weekList');

    const newWeeks = [
        { week: 11, title: "React 기본", description: "React의 기본적인 사용법을 배우고 간단한 앱을 만들어봅니다." },
        { week: 12, title: "Vue.js 입문", description: "Vue.js의 기본 문법과 특징을 학습하고, 앱을 구현합니다." },
        { week: 13, title: "TypeScript 이해", description: "TypeScript를 사용해 정적 타입을 활용하는 방법을 배웁니다." },
        { week: 14, title: "상태 관리 (Redux)", description: "Redux를 이용한 상태 관리 방법을 배우고, 웹 애플리케이션에 적용합니다." },
        { week: 15, title: "웹 애플리케이션 배포", description: "웹 애플리케이션을 실제 서버에 배포하는 방법을 배웁니다." }
    ];

    newWeeks.forEach(function (week) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-week', week.week);
        card.innerHTML = `
        <h3>${week.week}주차: ${week.title}</h3>
        <p>${week.description}</p>
      `;
        weekList.appendChild(card);
    });

    this.style.display = 'none';  // '주차 더 보기' 버튼 숨기기
});

// 각 주차 클릭 시 해당 주차로 넘어가는 기능
document.getElementById('weekList').addEventListener('click', function (event) {
    if (event.target.closest('.card')) {
        const week = event.target.closest('.card').getAttribute('data-week');
        // alert(`${week}주차로 이동합니다.`);  // 실제로 이동을 추가하려면 location.href 등을 활용할 수 있음
        location.href = `week${week}/index.html`;  // 해당 주차로 이동
    }
});

// 메인 화면으로 돌아가는 버튼
document.getElementById('homeBtn').addEventListener('click', function () {
    location.href = 'index.html';  // 메인 페이지로 이동
});
