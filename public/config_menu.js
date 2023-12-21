let configOpen = false;

// Fonction pour ouvrir la configuration
function openConfig(itemConfigId) {
    if (!configOpen) {
        const configId = $("#" + itemConfigId);
        configId.show();
        configOpen = true;
    }else {
        showNotification("⛔", "Veuillez fermer la configuration deja ouverte")
    }
}

// Fonction pour fermer la configuration
function closeConfig(itemConfigId) {
    const configId = $("#" + itemConfigId);
    configId.hide();  // Utilisez .hide() pour masquer l'élément
    configOpen = false;
}

