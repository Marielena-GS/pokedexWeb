document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const body = document.documentElement;

    // Verificar el modo guardado
    const darkMode = localStorage.getItem("darkMode");

    if (darkMode === "enabled") {
        body.classList.add("dark");
        themeIcon.classList.replace("fa-moon", "fa-sun");
    } else {
        body.classList.remove("dark");
        themeIcon.classList.replace("fa-sun", "fa-moon");
    }

    // Alternar modo oscuro
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark");
        if (body.classList.contains("dark")) {
            localStorage.setItem("darkMode", "enabled");
            themeIcon.classList.replace("fa-moon", "fa-sun");
        } else {
            localStorage.setItem("darkMode", "disabled");
            themeIcon.classList.replace("fa-sun", "fa-moon");
        }
    });
});
