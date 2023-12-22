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


        // Utilisation de la délégation d'événements pour gérer le clic sur les éléments avec la classe "inventory-items"
    $('#inventory').on('click', '.inventory-items', function () {
        const itemIndex = $(this).attr('id').replace('inventory-item-', '');
        openConfig(`itemConfig${itemIndex}`);
    });

    $('#generateBtn').on('click', function () {
        generateConfig(nbrCase);
    });
    // Fonction pour ajouter une ligne d'inventaire
    function addInventoryRow() {
        const inventory = $('#inventory');
        const newRow = $('<div class="inventory-row"></div>');
        nbrCase = nbrCase + 9;
        for (let i = 0; i < 9; i++) {
            const itemIndex = inventory.children('.inventory-row').length * 9 + i;
            const item = $(`
                <div class="inventory-items" id="inventory-item-${itemIndex}">Item_${itemIndex}</div>
                <div class="item-config gridConfig" id="itemConfig${itemIndex}">
                    <h2>Item_${itemIndex}</h2>
                    <div class="gridConfigA">
                        <label for="on${itemIndex}">Enable</label>
                        <input type="checkbox" id="on${itemIndex}" name="on${itemIndex}">
                        <br>
                        <label for="name${itemIndex}">Name</label><br>
                        <input type="text" id="name${itemIndex}" name="name${itemIndex}" value="">
                        <br>
                        <label for="display_name${itemIndex}">Display Name</label><br>
                        <input type="text" id="displayName${itemIndex}" name="displayName${itemIndex}" value="">
                        <br>
                        <label for="item${itemIndex}">Display Name</label><br>
                        <select class="item" id="item${itemIndex}"></select>
                        <br>
                    </div>
                    <div class="gridConfigB">
                        <label for="update${itemIndex}">Update</label>
                        <input type="checkbox" id="update${itemIndex}" name="update${itemIndex}">
                        <br>
                        <label for="hide_attributes${itemIndex}">Hide Attributes</label>
                        <input type="checkbox" id="hide_attributes${itemIndex}" name="hide_attributes${itemIndex}">
                    </div>
                    <div class="gridConfigC">
                        <br>
                        <button class="close-config" onclick="closeConfig('itemConfig${itemIndex}')">Close</button>
                    </div>
                </div>
            `);

            newRow.append(item);
        }

        inventory.append(newRow);
        loadItem(nbrCase);
    }

    // Fonction pour supprimer une ligne d'inventaire
    function removeInventoryRow() {
        const inventory = $('#inventory');
        const rows = inventory.children('.inventory-row');

        if (rows.length > 1) {
            rows.last().remove();
            nbrCase = nbrCase - 9;
        }
    }



    // Ajouter trois lignes d'inventaire au démarrage
    for (let i = 0; i < 3; i++) {
        addInventoryRow();
    }
});
