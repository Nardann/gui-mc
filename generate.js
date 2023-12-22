function generateConfig() {
    if (!configOpen) {
        const configId = $("#" + itemConfigId);
        configId.css("display", "grid");
        configOpen = true;
    }else {
        showNotification("⛔", "Veuillez fermer la configuration deja ouverte")
    }
}
