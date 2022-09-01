//Crie a const para a frase aqui
//a)
const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""

//b) 
let troca = frase.replace("verde", "rosa").replace("azul", "laranja")
console.log(troca)

//c)
console.log(`A nova frase possui a palavra "\ verde"\: ${frase.includes("verde")}\nA nova frase possui a palavra \"laranja\": ${frase.includes("laranja")}`)

//extra
const fraseMaiuscula = "mas não deixe o gato sair".toUpperCase()
console.log(`Frase maiuscula: ${frase.replace(`mas não deixe o gato sair`, fraseMaiuscula)}`)