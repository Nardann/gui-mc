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
                <div class="inventory-items" id="inventory-item-${itemIndex}">Item ${itemIndex}</div>
                <div class="item-config" id="itemConfig${itemIndex}">
                    <input type="text" name="name"/>
                </div>
            `);

            // Ajout du clic gauche à l'élément inventory-item
            item.find(`#inventory-item-${itemIndex}`).on('click', function (event) {
                if (event.button === 0) {
                    handleClick(`itemConfig${itemIndex}`);
                }
            });

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

    // Fonction pour gérer le clic gauche sur itemConfig
    function handleClick(itemConfigId) {
        alert(`Clic gauche sur ${itemConfigId}`);
        // Vous pouvez effectuer d'autres actions avec l'ID ici
    }

    // Ajouter trois lignes d'inventaire au démarrage
    for (let i = 0; i < 3; i++) {
        addInventoryRow();
    }
});
