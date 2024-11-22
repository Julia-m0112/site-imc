
let inputIdade = document.querySelector("#inputIdade")
let btnOk = document.querySelector("#btnOk")
let divResultado = document.querySelector("#resultado")

btnOk.addEventListener("click", mensagem)


function mensagem(evento) {
    let idade = inputIdade.value

    
    console.log("ola")
    idade = idade * 365
    divResultado.innerText = "Você tem aproximadamente " + idade + " dias de vida"
    evento.preventDefault()

}
