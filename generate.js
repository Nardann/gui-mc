var names = [];
var displayNames = [];
function generateConfig(nbrCase) {
    var titleInput = document.getElementById(`title`);
        var title = titleInput.value;
    console.log(nbrCase);
    var configDeluxemenu = `
menu_title: ${title}
size: ${nbrCase}
items:
`
    for (let i = 0; i < nbrCase; i++) {
        
        
        var onInput = document.getElementById(`on${i}`);
        
        if(onInput.checked) {
            var nameInput = document.getElementById(`name${i}`);
            names[i] = nameInput.value;

            var displayNameInput = document.getElementById(`displayName${i}`);
            displayNames[i] = displayNameInput.value;

            configDeluxemenu = configDeluxemenu + `
  '${names[i]}'
    display_name: '${displayNames[i]}'`
            
            
        }
    }
    console.log(configDeluxemenu);
}
