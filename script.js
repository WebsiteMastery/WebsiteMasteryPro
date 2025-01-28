document.addEventListener("DOMContentLoaded", () => {
    console.log("WebsiteMasteryPro Loaded");

    // Effet d'entrée sur le titre
    const title = document.querySelector("h1");
    title.style.opacity = "0";
    setTimeout(() => {
        title.style.opacity = "1";
        title.style.transition = "opacity 1s ease-in-out";
    }, 500);
});

// Fonction pour activer le Mode Sécurisé
function activateSecureMode() {
    alert("🔒 Mode Sécurisé Activé !");
    document.body.style.background = "#000";
    document.body.style.color = "#0f0";
}

// Fonction pour détecter l'IP et le réseau
async function detectDevice() {
    document.getElementById("ip-address").textContent = "Recherche...";
    try {
        const response = await fetch("https://api64.ipify.org?format=json");
        const data = await response.json();
        document.getElementById("ip-address").textContent = data.ip;
    } catch (error) {
        document.getElementById("ip-address").textContent = "Échec de détection";
    }

    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    document.getElementById("network-type").textContent = isMobile ? "Réseau Mobile" : "WiFi / Ethernet";
}
