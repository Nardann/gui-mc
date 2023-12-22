
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


// Sélectionnez l'élément <select>
var selectElement = document.getElementsByClassName("item")[0];

// Chemin vers le fichier JSON
var jsonFilePath = "./items.json";

// Effectuez une requête AJAX pour récupérer le contenu du fichier JSON
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // Parsez le contenu JSON
    var jsonData = JSON.parse(xhr.responseText);

    // Boucle à travers le JSON pour créer les options
    jsonData.forEach(function(itemData) {
      // Créez un élément <option>
      var optionElement = document.createElement("option");

      // Définissez la valeur et le texte de l'option
      optionElement.value = itemData.name;
      optionElement.text = itemData.displayName;

      // Ajoutez l'option à la liste déroulante
      selectElement.add(optionElement);
    });
  }
};
xhr.open("GET", jsonFilePath, true);
xhr.send();

