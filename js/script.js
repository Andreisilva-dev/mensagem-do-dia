// selecionando modal
let abrirModal = document.querySelector('#abrirModal')

// selecionando elementos do formlario
let formulario = document.querySelector('#formulario')
let data = document.querySelector('#data')
let citacao = document.querySelector('#citacao')
let autoria = document.querySelector('#autoria')

// botoes
let btnCriar = document.querySelector('#btnCriar')
let btnLimpar = document.querySelector('#btnLimpar')

// modal do canvas
let citacao00 = document.querySelector('#citacao00')
let dataCanvas = document.querySelector('.dataCanvas')
let frase = document.querySelector('.fraseCanva')
let autor = document.querySelector('.autor')

// validar data vazia 
function criarCitacao(){
    if(data.value === '' || citacao.value == '' || autoria.value == ''){
        abrirModal.classList.add('exibir')

        setTimeout(function(){
            abrirModal.classList.remove('exibir')
        },2000)
    }else {
        mensagem()
    }
}

// mostrar mensagem modal
function mensagem(){
    let dataTexto = data.value
    console.log(dataTexto)
    dataCanvas.textContent = dataTexto

    let cit = citacao.value

    frase.textContent = cit

    let autorModal = autoria.value
    autor.textContent = autorModal
    
}


// botao de limpar tela
btnLimpar.addEventListener('click',function(e){
    e.preventDefault()
    dataCanvas.textContent = ''
    let cit = ''
    frase.textContent = ''
    let autorModal = ''
    autor.textContent = ''

    data.value = ''
    citacao.value = ''
    autoria.value = ''
})
