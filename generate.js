function generateConfig(nbrCase) {
    console.log(nbrCase);
    for (let i = 0; i < nbrCase; i++) {
        var onInput = document.getElementById(`on${i}`);
        var names = [];
        if(onInput.checked) {
            var nameInput = document.getElementById(`name${i}`);
            names[i] = nameInput.value;
            console.log(names[i]);
        }
    }
}
