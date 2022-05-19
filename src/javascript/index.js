let body = document.querySelector('body');
let labels = document.querySelectorAll('label')
let input = document.querySelectorAll('label > input')

const botao = document.querySelector('#submit')

let valorDoPrato = 0
let valorSobremesa = 0
let valorBebida = 0
let contaTotal = 0


//Altera o estilo do item selecionado

body.addEventListener('click', () => {
    for (let i = 0; i < labels.length; i++) {
        let selecionado = document.querySelectorAll('.selecionado')
        if (input[i].checked == true) {
            labels[i].classList.add('selecionado')

            if (selecionado.length == 3) {
                botao.style.background= 'green'
                botao.disabled = false
                contaTotal = valorDoPrato + valorSobremesa + valorBebida
                botao.innerHTML = 'Valor da sua conta : ' + contaTotal.toFixed(2)
            }
        }
        else {
            labels[i].classList.remove('selecionado')
        }
        
    }
})

// Retorno a prato escolhido e seu valor 

let selecionarPrato = (pratoEscolhida) => {
    const escolha = document.querySelector(pratoEscolhida + '> h3 > span');
    console.log(parseFloat(escolha.innerHTML));
    valorDoPrato = parseFloat(escolha.innerHTML)
    return parseFloat(escolha.innerHTML)
}
// Retorno a bebida escolhido e seu valor 

let selecionarBebida = (bebidaEscolhida) => {
    const escolha = document.querySelector(bebidaEscolhida + '> h3 > span');
    console.log(parseFloat(escolha.innerHTML));
    valorBebida = parseFloat(escolha.innerHTML)
    return parseFloat(escolha.innerHTML)
}

// Retorno a sobremesa escolhido e seu valor 

let selecionarSobremesa = (sobremesaEscolhida) => {
    const escolha = document.querySelector(sobremesaEscolhida + '> h3 > span');
    console.log(parseFloat(escolha.innerHTML));
    valorSobremesa = parseFloat(escolha.innerHTML)
    return parseFloat(escolha.innerHTML)
}




