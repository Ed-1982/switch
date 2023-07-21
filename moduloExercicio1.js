
import promptSync from "prompt-sync";
let prompt = promptSync()

export function exercicio1() {



let nota1 = parseFloat(prompt("Nota 1: "));
let nota2 = parseFloat(prompt("Nota 2: "));
let nota3 = parseFloat(prompt("Nota 3: "));
let nota4 = parseFloat(prompt("Nota 4: "));

let media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 7.0) {
  console.log("APROVADO!");
} else if (media < 7.0 && media >= 5.0) {
  console.log("RECUPERAÇÃO");
} else if (media < 5.0) {
  console.log("REPROVADO!");
} else {
  console.log("Digite um valor válido!");
}


}

export function exercicio2()  {

console.log("=======================")
console.log(" ")

let numero1 = parseInt(prompt("Digite o PRIMEIRO número: "))
let numero2 = parseInt(prompt("Digite o SEGUNDO número: "))
let numero3 = parseInt(prompt("Digite o TERCEIRO número: "))

if(numero1 < numero2 && numero2 < numero3){
    console.log(" ")
    console.log("Os números ESTÃO em ordem crescente.")
}else{
    console.log(" ")
    console.log("Os números NÃO ESTÃO em ordem crescente.")
}
console.log(" ")
console.log("=======================")
}


export function exercicio3() {

console.log("=======================")
console.log(" ")

let anoNascimento = parseInt(prompt("Digite seu ANO DE NASCIMENTO: "))
let idade = 2023-anoNascimento



if(idade>=18 && idade<=100){
    console.log(" ")
    console.log(`Pessoa tem ${idade} anos, portanto, É maior de idade.`)
}else if(idade<0){
    console.log(" ")
    console.log("Digite uma data de nascimento válida.")
}else if(idade>100){
    console.log(" ")
    console.log("OLOKO BICHO.")
    console.log(`Pessoa tem ${idade} anos, portanto, É maior de idade.`)
    console.log("Está vivo ainda ?")
    console.log(" ")
    console.log("Se estiver, parabéns! Deus abençoe e dê muitos anos de vida.")
    console.log("Se não estiver, meus sentimentos.")
}else{
    console.log(" ")
    console.log(`Pessoa tem ${idade} anos, portanto, NÃO É maior de idade.`)
}
console.log(" ")
console.log("=======================")

}

export function exercicio4() {

console.log("=========================")
console.log("LA GRAVATA MODA MASCULINA")
console.log(" ")

let valor = parseFloat(prompt("Digite o valor total da compra: "))
let desconto10 = (valor*10)/100
let desconto20 = (valor*20)/100


if(valor<=100){
    console.log(" ")
    console.log("Para compras de até R$ 100.00 não há desconto.")
}else if(valor>100 && valor<=200){
    console.log(" ")
    console.log("O valor total da sua compra foi de R$ "+ valor)
    console.log("Parabéns!!! Você ganhou 10% de desconto")
    console.log("Desconto total de R$ " + desconto10)
    console.log("Com o desconto, sua compra ficou no valor total de R$ "+ (valor-desconto10))
}else{
    console.log(" ")
    console.log("O valor total da sua compra foi de R$ "+ valor)
    console.log("Parabéns!!! Você ganhou 20% de desconto")
    console.log("Desconto total de R$ " + desconto20)
    console.log("Com o desconto, sua compra ficou no valor total de R$ "+ (valor-desconto20))
}

console.log(" ")
console.log("=========================")
}


export function exercicio5() {


let nome = prompt("Digite o nome do funcionário: ");
let cargo = prompt("Digite o cargo do funcionário: ");
let salario = parseFloat(prompt("Digite o salario do funcionário: "));

aumento = salario * 0.1;

if (salario < 1000) {
  salario = salario + aumento;
}

console.log(`Nome: ${nome}`);
console.log(`Cargo: ${cargo}`);
console.log(`Salario: ${salario}`);


}
export function exercicio6() {

let x = parseFloat(prompt("Digite o número de X: "));
let y = parseFloat(prompt("Digite o número de Y: "));

if (x > y) {
  console.log(`Maior número: ${x}`);
} else if (y > x) {
  console.log(`Maior número: ${y}`);
} else {
  console.log("Digite um valor válido!");
}

}