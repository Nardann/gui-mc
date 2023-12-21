// Fonction pour ouvrir la configuration
function openConfig(itemConfigId) {
    const configId = $("#" + itemConfigId);
    configId.show();
}
// Fonction pour fermer la configuration
function closeConfig(itemConfigId) {
    const configId = $("#" + itemConfigId);
    configId.hide();  // Utilisez .hide() pour masquer l'élément
}

