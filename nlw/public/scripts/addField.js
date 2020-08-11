// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener('click', cloneField)

// Executar uma ação
function cloneField(){
    // Duplicar os campo. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    
    // Pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')
    
    // Para cada campo, limpar
    fields.forEach(function(field){

        // Pega o field do momento e o limpa
        field.value = ""
    })

    // Colocar na página: onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}