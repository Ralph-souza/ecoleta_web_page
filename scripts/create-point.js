// Dados da entidade

function populateUFs() {
    const ufselect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( (res) => {return res.json()})
    .then( (states) => {

        for( state of states ) {
            ufselect.innerHTML += `<option value="${state.id}">${state.nome}</option>` 
        }
    })
}

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const indexOfSelectedState = event.target.selectedIndex

    const ufValue = event.target.value
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a cidade</option>"
    citySelect.disabled = true

    fetch(url) 
    .then( (res) => {return res.json()} )
    .then( cities => {
        for( city of cities ) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }
        
        citySelect.disabled = false
    })
}

document.querySelector("select[name=uf]")
document.addEventListener("change", getCities)

// Itens de coleta

const itemsToCollect = document.querySelectorAll(".items-grid li")

for(const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

let selectedItems = []

function handleSelectedItem(event) {
    const itemLi = event.target

    // Adicionar ou remover uma classe
    itemLi.classList.toggle("selected")
    
    const itemId = itemLi.dataset.id

    // Verificar se existem itens selecionados, caso sim, coletar itens selecionados

    // Caso esteja selecionado retirar da seleção

    // Se não estiver selecionado adicionar a seleção

    // Atualizar os campos escondidos com os itens selecionados
}