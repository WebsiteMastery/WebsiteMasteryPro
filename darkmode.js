// Fonction pour basculer entre mode clair et mode sombre
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    // Sauvegarde du mode dans le localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        document.getElementById("mode-toggle").textContent = "☀️ Mode Clair";
    } else {
        localStorage.setItem("theme", "light");
        document.getElementById("mode-toggle").textContent = "🌙 Mode Sombre";
    }
}

// Vérifier si l'utilisateur a déjà un mode sauvegardé
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("mode-toggle").textContent = "☀️ Mode Clair";
    }
});
