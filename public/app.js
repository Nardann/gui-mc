// public/app.js

$(document).ready(function () {
    // ...
  
    // Gestionnaire de clic sur les éléments de l'inventaire
    $('.inventory').on('click', '.inventory-item', function (e) {
      // Si le clic est un clic droit, ignorer
      if (e.which === 3) return;
  
      showConfigMenu($(this));
    });
  
    // Gestionnaire de clic droit pour ouvrir le menu de configuration
    $('.inventory').on('contextmenu', '.inventory-item', function (e) {
      e.preventDefault();
      showConfigMenu($(this));
    });
  
    // Gestionnaire de clic sur le document pour masquer le menu de configuration
    $(document).on('click', function (e) {
      if (!$(e.target).closest('.config-menu').length) {
        hideConfigMenu();
      }
    });
  
    // Gestionnaire de clic sur les boutons Ajouter/Supprimer (utilisation de délégués d'événements)
    $('#addRowBtn').on('click', function () {
      addInventoryRow();
    });
  
    $('#removeRowBtn').on('click', function () {
      removeInventoryRow();
    });
  
    // Fonction pour ajouter une ligne d'inventaire
    function addInventoryRow() {
      const inventory = $('.inventory');
      const newRow = $('<div class="inventory-row"></div>');
  
      for (let i = 0; i < 9; i++) {
        const item = $('<div class="inventory-item">Item ' + (i + 1) + '</div>');
        newRow.append(item);
      }
  
      inventory.append(newRow);
    }
  
    // Fonction pour supprimer une ligne d'inventaire
    function removeInventoryRow() {
      const inventory = $('.inventory');
      const rows = inventory.children('.inventory-row');
  
      if (rows.length > 1) {
        rows.last().remove();
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
  