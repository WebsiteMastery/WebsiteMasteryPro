async function detectDevice() {
    document.getElementById("ip-address").textContent = "Recherche...";
    
    try {
        const response = await fetch("https://api64.ipify.org?format=json");
        const data = await response.json();
        document.getElementById("ip-address").textContent = data.ip;
    } catch (error) {
        document.getElementById("ip-address").textContent = "Échec de détection";
    }

    // Détection du type de réseau
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    document.getElementById("network-type").textContent = isMobile ? "Réseau Mobile (4G/5G)" : "WiFi / Ethernet";

    // Détection du système d’exploitation
    const platform = navigator.platform;
    document.getElementById("device-info").innerHTML = `
        <p><strong>OS :</strong> ${platform}</p>
        <p><strong>Navigateur :</strong> ${navigator.userAgent}</p>
    `;
}

// Exécuter la détection dès que la page charge
document.addEventListener("DOMContentLoaded", detectDevice);

async function detectDevice() {
    document.getElementById("ip-address").textContent = "Recherche...";
    
    try {
        const response = await fetch("https://api64.ipify.org?format=json");
        const data = await response.json();
        document.getElementById("ip-address").textContent = data.ip;
    } catch (error) {
        document.getElementById("ip-address").textContent = "Échec de détection";
    }

    // Détection du type de réseau
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    document.getElementById("network-type").textContent = isMobile ? "Réseau Mobile (4G/5G)" : "WiFi / Ethernet";

    // Détection du système d’exploitation et du navigateur
    const os = navigator.platform;
    const browser = navigator.userAgent;
    document.getElementById("os-info").textContent = os;
    document.getElementById("browser-info").textContent = browser;
}

// Exécuter la détection dès que la page charge
document.addEventListener("DOMContentLoaded", detectDevice);
