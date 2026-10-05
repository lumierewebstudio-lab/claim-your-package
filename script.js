let currentLanguage = "es";

const translations = {
    es: {
        eyebrow: "SU PAQUETE LE ESPERA",
        title: "RECLAME SU PAQUETE",
        text: "Continúe a WhatsApp para reclamar su paquete.",
        claim: "RECLAMAR AHORA",
        whatsapp:
            "Hola, quiero reclamar mi paquete. He sido seleccionado entre los afortunados ganadores. La selección se realiza de forma aleatoria."
    },

    en: {
        eyebrow: "YOUR PACKAGE AWAITS",
        title: "CLAIM YOUR PACKAGE",
        text: "Continue to WhatsApp to claim your package.",
        claim: "CLAIM NOW",
        whatsapp:
            "Hello, I would like to claim my package. I have been selected among the lucky winners. The selection is made randomly."
    },

    pt: {
        eyebrow: "O SEU PACOTE ESPERA POR SI",
        title: "RECLAME O SEU PACOTE",
        text: "Continue para o WhatsApp para reclamar o seu pacote.",
        claim: "RECLAMAR AGORA",
        whatsapp:
            "Olá, quero reclamar o meu pacote. Fui selecionado entre os vencedores sortudos. A seleção é feita aleatoriamente."
    }
};


function selectLanguage(language) {
    currentLanguage = language;

    const translation = translations[language];

    document.getElementById("eyebrow").textContent =
        translation.eyebrow;

    document.getElementById("heroTitle").textContent =
        translation.title;

    document.getElementById("heroText").textContent =
        translation.text;

    document.getElementById("claimText").textContent =
        translation.claim;

    document.getElementById("languageScreen").classList.add("hidden");
    document.getElementById("home").classList.remove("hidden");
}


function showLanguages() {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("languageScreen").classList.remove("hidden");
}


function claimPackage() {

    const message = translations[currentLanguage].whatsapp;

    const whatsappNumber = "16838681682";

    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);

    window.location.href = whatsappURL;
}
