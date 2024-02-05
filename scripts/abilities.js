let abilities_added = [];

function addAbilityClick(e){
    var key = e.keycode || e.which;
    if (key == 13) {
        e.preventDefault();
        addAbility();
    }
}

function addAbility(){
    let ability_to_add = document.getElementById('abilities');
    let ability_to_add_name = ability_to_add.value;
    let abilities_added_box = document.getElementById('abilities-added-box');

    if ((ability_to_add_name != '') && (!abilities_added.includes(ability_to_add_name))) {
        let ability_box = document.createElement('div');
        ability_box.classList.add('ability-box');

        let remove_icon = document.createElement('i');
        remove_icon.classList.add('fa-solid');
        remove_icon.classList.add('fa-xmark');
        remove_icon.classList.add('pointer');
        remove_icon.setAttribute('onclick', 'removeAbility(event)');

        let ability_name = document.createElement('p');
        ability_name.innerText = ability_to_add_name;

        ability_box.append(remove_icon);
        ability_box.append(ability_name);
        abilities_added_box.append(ability_box);

        abilities_added.push(ability_to_add_name);

        let hidden_abilities = document.getElementById('hidden-abilities');
        if (hidden_abilities.value != '') {
            hidden_abilities.value += ' ' + ability_to_add_name;
        } else {
            hidden_abilities.value += ability_to_add_name;
        }
    }
    ability_to_add.value = '';

    ability_to_add.focus();
}

function removeAbility(event) {
    let ability_name = event.target.nextSibling.innerText

    // Remove element from DOM
    event.target.parentNode.remove();

    // Remove element from abilities_added array
    abilities_added.forEach(function (element, index) {
        if (element == ability_name) {
            abilities_added.splice(index, 1);
        }
    });

    // Remove element from input hidden-abilities
    let hidden_abilities = document.getElementById('hidden-abilities');
    hidden_abilities.value = hidden_abilities.value.replace(' ' + ability_name, '');
    hidden_abilities.value = hidden_abilities.value.replace(ability_name, '');
    if (hidden_abilities.value.substring(0, 1) == ' ') {
        hidden_abilities.value = hidden_abilities.value.substring(1);
    }
}
