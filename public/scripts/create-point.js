const ufSelect = document.querySelector('select[name=uf]');
const citySelect = document.querySelector('select[name=city]');
const stateInput = document.querySelector('input[name=state]');

const itemsToCollect = document.querySelectorAll('.items-grid li');
const itemsInput = document.querySelector('input[name=items]');

const buttonSubmit = document.querySelector('button #submit');

const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"

function populateUFs() {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        for (const state of data) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.sigla}</option>`;
        }
    })
}
populateUFs();

function getCities(event) {
    stateInput.value = event.target.options[event.target.selectedIndex].text;
    console.log(event.target.selectedIndex);
    console.log(stateInput.value);

    const cityURL = `${url}/${event.target.value}/municipios/`;

    citySelect.innerHTML = '<option value>Selecione a Cidade</option>';
    citySelect.disabled = true;

    fetch(cityURL)
    .then(res => res.json())
    .then(data => {
        
        for (const city of data) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`;
        }
        citySelect.disabled = false;
    })
}

ufSelect.addEventListener("change", getCities)

for (let item of itemsToCollect) {
    item.addEventListener('click', handleSelectedItem)
}

let selectedItems = [];

function handleSelectedItem(event) {
    const itemLi = event.target;
    const itemId = itemLi.dataset.id;

    itemLi.classList.toggle('selected')

    const alreadySelected = selectedItems.findIndex(item => item == itemId)
    console.log(alreadySelected);

    if (alreadySelected == -1) {
        selectedItems.push(itemId);

    } else {
        let filteredItems = selectedItems.filter(item => item != itemId)
        selectedItems = filteredItems;
    }

    itemsInput.value = selectedItems;
}