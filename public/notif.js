
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
