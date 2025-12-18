document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const html = document.documentElement;
    const themeIcon = themeToggle.querySelector("i");

    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialTheme = savedTheme || systemTheme;

    // Apply initial theme
    setTheme(initialTheme);

    themeToggle.addEventListener("click", () => {
        const currentTheme = html.getAttribute("data-theme") || "light";
        const newTheme = currentTheme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    });

    function setTheme(theme) {
        html.setAttribute("data-theme", theme);
        if (theme === "dark") {
            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");
            themeToggle.title = "Switch to light mode";
        } else {
            themeIcon.classList.remove("fa-sun");
            themeIcon.classList.add("fa-moon");
            themeToggle.title = "Switch to dark mode";
        }
    }
});
