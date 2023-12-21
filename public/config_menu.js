function showConfigMenu(event, caseId) {
    event.preventDefault(); // Prevent the default context menu
    const caseId = document.getElementById(caseId);
    configBox.style.display = "block";
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
