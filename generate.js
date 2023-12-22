function generateConfig(nbrCase) {
    console.log(nbrCase);
    for (let i = 0; i < nbrCase; i++) {
        var onInput = document.getElementById(`on${i}`);
        var on = onInput.value;
        console.log(on);
    }
}
