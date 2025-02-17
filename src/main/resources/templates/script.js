document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const body = document.documentElement; // Aplica la clase "dark" en <html> para asegurar compatibilidad con Tailwind

    // Cargar estado del modo oscuro desde localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark");
        themeIcon.classList.replace("fa-moon", "fa-sun");
    }

    // Evento para cambiar el modo oscuro
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark");
        const isDarkMode = body.classList.contains("dark");

        // Guardar en localStorage
        localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");

        // Cambiar el ícono
        if (isDarkMode) {
            themeIcon.classList.replace("fa-moon", "fa-sun");
        } else {
            themeIcon.classList.replace("fa-sun", "fa-moon");
        }
    });
});
