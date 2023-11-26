// public/app.js

$(document).ready(function () {
    // Exemple de génération d'une ligne d'inventaire
    generateInventoryRow();
  
    // Gestionnaire de clic sur les éléments de l'inventaire
    $('.inventory').on('click', '.inventory-item', function () {
      showConfigMenu($(this));
    });
  
    // Gestionnaire de clic sur le document pour masquer le menu de configuration
    $(document).on('click', function (e) {
      if (!$(e.target).closest('.config-menu').length) {
        hideConfigMenu();
      }
    });
  
    // Fonction pour générer une ligne d'inventaire
    function generateInventoryRow() {
      const inventory = $('.inventory');
      for (let i = 0; i < 9; i++) {
        const item = $('<div class="inventory-item">Item ' + (i + 1) + '</div>');
        inventory.append(item);
      }
    }
  
    // Fonction pour afficher le menu de configuration
    function showConfigMenu(item) {
      const configMenu = $('<div class="config-menu">Config menu for ' + item.text() + '</div>');
      item.append(configMenu);
      configMenu.show();
    }
  
    // Fonction pour masquer le menu de configuration
    function hideConfigMenu() {
      $('.config-menu').hide().remove();
    }
  });
  