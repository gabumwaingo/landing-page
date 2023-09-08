document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            button.style.backgroundColor = "#ffaa00"; /* Neon orange when clicked */
            button.style.borderColor = "#ffaa00";
        });
    });
});
