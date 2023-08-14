// Formas de escrita de strings

let cor = "verde"

let numeroFavorito = 13
let animalFavorito = "cachorro"

numeroFavorito = 7
animalFavorito = "coelho"

// Concatenação de Strings
console.log("A minha cor favorita é " + cor + " e o meu numero favorito é " + numeroFavorito + " o meu animal favorito é " + animalFavorito )

// Interpolação de Strings
// template literals ou template strings

console.log(`A minha cor favorita é ${cor} e o meu numero favorito é ${numeroFavorito} o meu animal favorito é ${animalFavorito}`)

// CONDICIONAIS
// Determinadas ações no código que irão acontecer, dependendo da resposta do usuário.

// CONDICIONAIS SIMPLES

let ceuClaro = true

if(ceuClaro){
console.log("vou sair para correr")
}
// se (o céu estiver claro){
// console.log("vou sair para correr")
// }

// OPERADORES DE COMPARAÇÃO
// > -> MAIOR QUE, VAI VERIFICAR SE UM VALOR É MAIOR QUE O OUTRO

// < -> MENOR QUE, VAI VERIFICAR SE UM VALOR É MENOR QUE O OUTRO

// >= -> MAIOR OU IGUAL A, VAI VERIFICAR SE UM VALOR É MAIOR OU IGUAL AO OUTRO

// <= -> MENOR OU IGUAL A, VAI VERIFICAR SE UM VALOR É MENOR OU IGUAL AO OUTRO

// == -> COMPARAÇÃO DE IGUALDADE, ELE VAI VERIFICAR SE UM VALOR É IGUAL O OUTRO

// === -> ESTRITAMENTE IGUAL, ELE VAI VERIFICAR SE O VALOR E O TIPO SÃO IGUAIS AO OUTRO

// != -> DIFERENTE DE, ELE VAI VERIFICAR SE UM VALOR É DIFERENTE DO OUTRO

// !== -> ESTRITAMENTE DESIGUAL, ELE VAI VERIFICAR SE O VALOR E TIPO SÃO DIFERENTES UM DO OUTRO

let pratoDoDia = "salada"
pratoDoDia = "churrasco"

if(pratoDoDia == "salada" ){
    console.log("meu deus que tristeza")
}

let politicasDePrivacidade = "check"

politicasDePrivacidade = "nao check"

if(politicasDePrivacidade == "check"){
    console.log("você pode se cadastrar na rede social")
}

let saldo = 100

if(saldo >= 100){
    console.log("vou comer uma pizza")
}

let moedasVnw = 1000

if(moedasVnw <= 2000){
    console.log("me mande mais moedas Vnw")
}
