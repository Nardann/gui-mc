// public/app.js

$(document).ready(function () {
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
      const inventory = $('#inventory');
      const newRow = $('<div class="inventory-row"></div>');

      for (let i = 0; i < 9; i++) {
        const itemIndex = inventory.children('.inventory-row').length * 9 + i;
        const item = $(`<div class="inventory-items" id="inventory-item-${itemIndex}" oncontextmenu="showConfigMenu(event, 'case${itemIndex}')">Item ${itemIndex}</div>
                      <div class="item-config" id="item-config-${itemIndex}">
                      <input type="text" name="name"/>
                      </div>`);
        newRow.append(item);
      }

      inventory.append(newRow);
    }

    // Fonction pour supprimer une ligne d'inventaire
    function removeInventoryRow() {
      const inventory = $('#inventory');
      const rows = inventory.children('.inventory-row');

      if (rows.length > 1) {
        rows.last().remove();
      }
    }
    // Ajouter trois lignes d'inventaire au démarrage
    for (let i = 0; i < 3; i++) {
      addInventoryRow();
    }
  });
