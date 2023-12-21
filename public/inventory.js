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
            const item = $(`
                <div class="inventory-items" id="inventory-item-${itemIndex}">Item_${itemIndex}</div>
                <div class="item-config" id="itemConfig${itemIndex}">
                    <input type="text" name="name"/>
                    <input class="close" id="close${itemIndex}" type="button" onclick="close('itemConfig${itemIndex}')"value="close"/>
                </div>
            `);

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

    // Utilisation de la délégation d'événements pour gérer le clic sur les éléments avec la classe "inventory-items"
    $('#inventory').on('click', '.inventory-items', function () {
        const itemIndex = $(this).attr('id').replace('inventory-item-', '');
        openConfig(`itemConfig${itemIndex}`);
    });

    // Ajouter trois lignes d'inventaire au démarrage
    for (let i = 0; i < 3; i++) {
        addInventoryRow();
    }
});
