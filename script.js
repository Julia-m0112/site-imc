
let inputAltura = document.querySelector("#inputAltura")
let btnCalcular = document.querySelector("#btnCalcular")
let divResultado = document.querySelector("#resultado")
let inputPeso = document.querySelector("#inputPeso")

btnCalcular.addEventListener("click", calculaIMC)


function calculaIMC(evento) {
    evento.preventDefault()
    
    // capturando a altura
    let altura = inputAltura.value
    // capturando o peso
    let peso = inputPeso.value

    if (peso == "" || altura == ""){
        divResultado.innerText = "Altura e Peso são obrigatórios"
        return
    }

    const imc = peso / (altura * altura);

    let categoria

  

    if (imc <= 18.5) {
       categoria = "Magreza"
    } else if (imc <= 24.9) {
       categoria = "Normal"
    } else if (imc <= 29.9) {
        categoria = "Sobrepeso"
    } else if (imc <= 34.9) {
       categoria = "Obesidade grau I"
    } else if ( imc <= 39.9) {
        categoria = "Obesidade grau II"
    } else {
        categoria = "Obesidade grau III"
    }

    let mensagem = `
    <p>O seu índice IMC é de <strong>${imc.toFixed(2)}</strong>.</p>
    <p>Você se enquadra na categoria: <strong>${categoria}</strong>.</p>
    `

    divResultado.innerHTML = mensagem

}
