
function showNotification(title, text) {
  if (title != null) {
    var title = title;
  }else {
    var title = "";
  }
  if (text != null) {
    var text = text;
  }else {
    var text = "";
  }
  displayNotification(title, text);
  setTimeout(function() {
    maskNotification("");
  }, 4000);
}

function displayNotification(title, text) {
  var notif = document.getElementById("notif");
  var notif_title = document.getElementById("notif_title");
  var notif_text = document.getElementById("notif_text");
  notif.classList.add("notif_on");
  notif_title.innerText = title;
  notif_text.innerText = text;
}

function maskNotification(message) {
  notif.classList.add("notif_off");
  setTimeout(function() {
    removeNotification("");
  }, 1000); 
}

function removeNotification(message) {
  notif.classList.remove("notif_on");
  notif.classList.remove("notif_off");
  notif_title.innerText = message;
  notif_text.innerText = message;
}

function loadItem(nbrCase) {
    for (let i = 0; i < nbrCase; i++) {
        fetch("./items.json")
            .then((response) => response.json())
            .then((data) => {
                const itemSelect = document.getElementById(`item${i}`);

                if (!itemSelect) {
                    console.error(`Élément avec l'ID 'item${i}' non trouvé.`);
                    return;
                }

                const sortedOptions = [];

                for (const key in data) {
                    if (data.hasOwnProperty(key)) {
                        sortedOptions.push({ value: data[key].name, text: data[key].displayName });
                    }
                }

                // Trier le tableau par ordre alphabétique en utilisant le nom de l'élément
                sortedOptions.sort((a, b) => a.text.localeCompare(b.text));

                // Parcourir les options triées et les ajouter au menu déroulant
                sortedOptions.forEach((optionData) => {
                    const option = document.createElement("option");
                    option.value = optionData.value;
                    option.text = optionData.text;
                    itemSelect.appendChild(option);
                });

                // Gérer la mise à jour de l'input de l'affichage de l'élément sélectionné
                itemSelect.addEventListener("change", function () {
                    const selectedItemTextType = itemSelect.value;
                    console.log(`Sélection de l'élément ${i}: ${selectedItemTextType}`);
                    const itemDisplay = document.getElementById(`itemDisplay${i}`);
                    if (itemDisplay) {
                        itemDisplay.value = selectedItemTextType;
                    } else {
                        console.error(`Élément avec l'ID 'itemDisplay${i}' non trouvé.`);
                    }
                });
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération des données JSON:", error);
            });
    }
}
