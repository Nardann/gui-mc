function showConfigMenu(event) {
    event.preventDefault(); // Prevent the default context menu
    const configBox = document.getElementById("configBox");
    configBox.style.display = "block";
    configBox.style.left = event.clientX + "px";
    configBox.style.top = event.clientY + "px";
}

function saveConfiguration() {
    const input1Value = document.getElementById("input1").value;
    const input2Value = document.getElementById("input2").value;

    // Perform actions with the input values, e.g., save to a database

    // Hide the configuration menu after saving
    document.getElementById("configBox").style.display = "none";
}

