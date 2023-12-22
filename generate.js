var names = [];
var displayNames = [];
var items = [];
var updates = [];
var hide_attributes = [];
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

            var itemInput = document.getElementById(`item${i}`);
            items[i] = itemInput.value;

            var updateInput = document.getElementById(`update${i}`);
            if(updateInput.checked) {updates[i] = "true";}
            
            var hide_attributesInput = document.getElementById(`hide_attributes${i}`);
            if(hide_attributesInput.checked) {hide_attributes[i] = "true";}

            configDeluxemenu = configDeluxemenu + `
  '${i}${names[i]}'
    display_name: '${displayNames[i]}'
    material: '${itemInput[i]}'
    slot: ${i}
    hide_attributes: ${hide_attributes[i]}
    update: ${update[i]}
`
            
            
        }
    }
    console.log(configDeluxemenu);
    var code = document.getElementById("code");
    code.textContent = configDeluxemenu;

    

}
