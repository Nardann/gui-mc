$(document).ready(function () {
    let activeConfigMenu = null;
  
    // Fonction pour afficher le menu de configuration
    function showConfigMenu(item) {
      const configMenu = $('<div class="config-menu"></div>');
      const itemName = item.text();
      const inputName = $('<input type="text" class="config-input" placeholder="Nom de l\'item">');
      const saveButton = $('<button class="save-btn">Sauvegarder</button>');
  
      // Vérifier s'il y a une valeur en cache et l'afficher dans l'input
      const cachedValue = sessionStorage.getItem('cachedValue');
      if (cachedValue) {
        inputName.val(cachedValue);
      }
  
      // Ajouter l'input et le bouton au menu
      configMenu.append(inputName, saveButton);
  
      // Ajouter le menu à l'élément
      item.append(configMenu);
  
      // Afficher le menu
      configMenu.show();
  
      // Activer l'input directement
      inputName.focus();
  
      // Gestionnaire de clic sur le bouton de sauvegarde
      saveButton.on('click', function () {
        const enteredValue = inputName.val();
        itemName.text(enteredValue);
        // Enregistrer la valeur dans le cache
        sessionStorage.setItem('cachedValue', enteredValue);
        hideConfigMenu();
      });
  
      // Gestionnaire de perte de focus sur l'input pour sauvegarder automatiquement
      inputName.on('blur', function () {
        const enteredValue = inputName.val();
        itemName.text(enteredValue);
        // Enregistrer la valeur dans le cache
        sessionStorage.setItem('cachedValue', enteredValue);
        hideConfigMenu();
      });
  
      // Enregistrer le menu actif
      activeConfigMenu = configMenu;
    }
  
    // Fonction pour masquer le menu de configuration
    function hideConfigMenu() {
      if (activeConfigMenu) {
        activeConfigMenu.hide().remove();
        activeConfigMenu = null; // Réinitialiser la variable du menu actif
      }
    }
  
    // Gestionnaire de clic sur les éléments de l'inventaire
    $('.inventory').on('click', '.inventory-item', function () {
      if (activeConfigMenu) {
        hideConfigMenu(); // Cacher le menu actif s'il y en a un
      }
  
      showConfigMenu($(this));
    });
  
    // Gestionnaire de clic sur le document pour masquer le menu de configuration
    $(document).on('click', function (e) {
      if (!$(e.target).closest('.config-menu').length) {
        hideConfigMenu();
      }
    });
  });
  