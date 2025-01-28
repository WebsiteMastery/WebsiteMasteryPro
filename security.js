// Fonction pour activer le Mode Sécurisé
function activateSecureMode() {
    alert("🔒 Mode Sécurisé Activé !");
    document.body.style.background = "#000";
    document.body.style.color = "#0f0";
    document.getElementById("security-info").innerHTML = "<h2>🔐 Sécurité Maximale Active</h2>";
}

// Fonction pour générer une fausse IP (brouillage IP)
function generateFakeIP() {
    let fakeIP = `192.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
    document.getElementById("ip-address").textContent = fakeIP;
}

// Fonction pour activer un mode anonyme
function activateAnonymousMode() {
    alert("🕵️‍♂️ Mode Anonyme Activé !");
    document.getElementById("network-type").textContent = "Navigation Privée";
    document.getElementById("ip-address").textContent = "Masqué";
}

// Ajout d'un délai pour brouiller l'IP après 5 secondes
setTimeout(() => {
    generateFakeIP();
}, 5000);
