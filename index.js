// 햄버거 메뉴 토글을 위한 자바스크립트
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// 메뉴 버튼 클릭 시 메뉴 보이기/숨기기
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // 접근성을 위한 상태 변경
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", !expanded);
});