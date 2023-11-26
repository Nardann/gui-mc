// public/app.js

$(document).ready(function () {
  let activeConfigMenu = null;

  // Gestionnaire de clic sur les éléments de l'inventaire
  $('.inventory').on('mousedown', '.inventory-item', function (e) {
    // Si le clic est un clic droit, ignorer
    if (e.which === 3) return;

    if (activeConfigMenu) {
      hideConfigMenu(); // Cacher le menu actif s'il y en a un
    }

    showConfigMenu($(this));
  });

  // Gestionnaire de relâchement du clic pour masquer le menu de configuration
  $(document).on('mouseup', function () {
    if (activeConfigMenu) {
      hideConfigMenu(); // Cacher le menu actif
    }
  });

  // Gestionnaire de clic droit pour ouvrir le menu de configuration
  $('.inventory').on('contextmenu', '.inventory-item', function (e) {
    e.preventDefault();

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

  // Gestionnaire de clic sur les boutons Ajouter/Supprimer (utilisation de délégués d'événements)
  $('#addRowBtn').on('click', function () {
    if ($('.inventory-row').length < 6) {
      addInventoryRow();
    }
  });

  $('#removeRowBtn').on('click', function () {
    removeInventoryRow();
  });

  // Fonction pour ajouter une ligne d'inventaire
  function addInventoryRow() {
    const inventory = $('.inventory');
    const newRow = $('<div class="inventory-row"></div>');

    for (let i = 0; i < 9; i++) {
      const itemIndex = inventory.children('.inventory-row').length * 9 + i;
      const item = $(`<div class="inventory-item">Item ${itemIndex}</div>`);
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
    const configMenu = $('<div class="config-menu"></div>');
    const itemName = item.text();
    const inputName = $('<input type="text" placeholder="Nom de l\'item" value="' + itemName + '">');
    const saveButton = $('<button class="save-btn">Sauvegarder</button>');

    // Ajouter l'input et le bouton au menu
    configMenu.append(inputName, saveButton);

    // Ajouter le menu à l'élément
    item.append(configMenu);

    // Afficher le menu
    configMenu.show();

    // Gestionnaire de clic sur le bouton de sauvegarde
    saveButton.on('click', function (e) {
      e.stopPropagation(); // Empêcher la propagation du clic pour éviter la fermeture du menu
      itemName.text(inputName.val());
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

  // Ajouter trois lignes d'inventaire au démarrage
  for (let i = 0; i < 3; i++) {
    addInventoryRow();
  }
});
