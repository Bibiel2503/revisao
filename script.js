// variaveis

//let nome = "Samuel Santos"
let idade = 45
let idadeEsposa = "45"
const anoNasimento = 1997


//decisão

if (idade == idadeEsposa) {
    alert("igual...")
}else {
    alert("Cada um no seu quadrado!")
}

//Lendo informações do HTML

const titulo = document.getElementById("titulo")
const resultado = document.getElementById("resultado")

const nome = document.getElementById("nome")
const email = document.getElementById("email")

titulo.textContent = "mudei o titulo"


function mostrarResultado(
    
) {

titulo.style.color = "violet"
titulo.style.backgroundColor = "blue"
titulo.style.borderRadius = "10px"
titulo.style.padding = "10px"


resultado.textContent = nome.value + "" + email.value

}
