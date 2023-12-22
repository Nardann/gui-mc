let nbrCase = 0;
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
        let nbrCase = nbrCase + 9;
        for (let i = 0; i < 9; i++) {
            const itemIndex = inventory.children('.inventory-row').length * 9 + i;
            const item = $(`
                <div class="inventory-items" id="inventory-item-${itemIndex}">Item_${itemIndex}</div>
                <div class="item-config gridConfig" id="itemConfig${itemIndex}">
                    <h2>Item_${itemIndex}</h2>
                    <div class="gridConfigA">
                        <label for="on${itemIndex}">Activer</label>
                        <input type="checkbox" id="on${itemIndex}" name="on${itemIndex}">
                        <br>
                        <label for="name${itemIndex}">Name</label><br>
                        <input type="text" id="name${itemIndex}" name="name${itemIndex}" value="">
                        <br>
                        <label for="display_name${itemIndex}">Display Name</label><br>
                        <input type="text" id="display_name${itemIndex}" name="display_name${itemIndex}" value="">
    
                        <br><br>
                    </div>
                    <div class="gridConfigC">
                        <br>
                        <button class="close-config" onclick="closeConfig('itemConfig${itemIndex}')">Fermer</button>
                    </div>
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
            let nbrCase = nbrCase - 9;
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
