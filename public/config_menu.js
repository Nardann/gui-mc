function showConfigMenu(event, cellId) {
    event.preventDefault(); // Prevent the default context menu

    const configBox = document.getElementById("configBox");
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");

    // Set unique identifiers for inputs based on the cellId
    input1.setAttribute("data-cell-id", cellId);
    input2.setAttribute("data-cell-id", cellId);

    // Set initial values based on the cellId or retrieve values from storage
    // For example, you might retrieve stored values for each cell from a database

    // Position the menu
    configBox.style.display = "block";
    configBox.style.left = event.clientX + "px";
    configBox.style.top = event.clientY + "px";
}

function saveConfiguration() {
    const configBox = document.getElementById("configBox");
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");

    const cellId = input1.getAttribute("data-cell-id");

    // Retrieve values from inputs and save to storage (e.g., a database) based on the cellId
    const input1Value = input1.value;
    const input2Value = input2.value;

    // Perform actions with the input values, e.g., save to a database

    // Hide the configuration menu after saving
    configBox.style.display = "none";
}
