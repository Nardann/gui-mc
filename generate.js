var names = [];
function generateConfig(nbrCase) {
    console.log(nbrCase);
    for (let i = 0; i < nbrCase; i++) {
        var onInput = document.getElementById(`on${i}`);
        
        if(onInput.checked) {
            var nameInput = document.getElementById(`name${i}`);
            names[i] = nameInput.value;

            var displayNameInput = document.getElementById(`displayName${i}`);
            displayName[i] = displayNameInput.value;
        }
    } return names;
}
