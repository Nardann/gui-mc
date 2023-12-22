function generateConfig(nbrCase) {
    console.log(nbrCase);
    for (let i = 0; i < nbrCase; i++) {
        var onInput = document.getElementById(`on${i}`);
        if(onInput.checked) {
            var nameInput = document.getElementById(`name${i}`);
            var name[i] = nameInput.value;
            console.log(name[i]);
        }
    }
}
