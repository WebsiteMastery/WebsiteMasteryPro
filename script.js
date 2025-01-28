document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ script.js chargé avec succès !");
    alert("✅ Le script fonctionne !");
});

// Fonction pour activer le Mode Sécurisé
function activateSecureMode() {
    alert("🔒 Mode Sécurisé Activé !");
    document.body.style.background = "#000";
    document.body.style.color = "#0f0";
}

// Fonction pour activer/désactiver le mode sombre
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        document.getElementById("mode-toggle").textContent = "☀️ Mode Clair";
    } else {
        localStorage.setItem("theme", "light");
        document.getElementById("mode-toggle").textContent = "🌙 Mode Sombre";
    }
}

// Vérifier le mode stocké
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("mode-toggle").textContent = "☀️ Mode Clair";
    }
});
