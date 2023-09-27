document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".main-container > section, footer");

    function checkVisibility() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.getBoundingClientRect().height;
            const triggerPosition = window.innerHeight - sectionHeight / 3;

            if (sectionTop <= triggerPosition) {
                section.classList.add("visible");
            }
        });
    }

    checkVisibility(); // 初回チェック
    window.addEventListener("scroll", checkVisibility);
});
