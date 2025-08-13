let idade = Number(prompt("Digite a sua idade?"));

if (idade >= 18) {
  console.log("vc é maior de idade");
} else {
  console.log("vc é de menor");
}

var nota = Number(prompt("Digite a sua nota??"));

if (nota >= 7) {
  console.log("perfeito, aprovado");
} else if (nota <= 6 && nota >= 4) {
  console.log("Recupeção");
} else {
  console.log("reprovado");
}

var cor = prompt("Digite uma cor??");

switch (cor) {
  case "vermelho":
        console.log("cuidado")
    break;
    case "verde":
        console.log("razoavel")
    break;

    case "azul":
        console.log("tranquilo")
    break;
  default:
        console.log("Não tem essa cor")
    break;
}

let num = Number(prompt("Digite um número"))

for ( let i = 0; i <= 10; i++) {
    let resultado = num * i 
    console.log(`${num} x ${i} = ${resultado}`);   
}

let contador = 10

while (contador >=0) {
    console.log(" contagem " + contador)
    contador--;
}

let soma= 0

for ( let i = 0; i <=50; i++){
    if (i % 2 === 0) {
        soma += 1
    }
}

if( usuario === "adm" && senha === "123"){
    console.log("Acesso permitido")
}else (
    console.log("Acesso negado")
)

let usuario = prompt('Digite seu usuario')
let senha = prompt('Digite sua senha')

switch (usuario, senha) {
    case "adm123" || "123":
        console.log("Acesso permitido")
        break;

    default:
        console.log("Acesso negado")
        break;
}

let numUm 
let numDois 

numUm = Number(prompt("Digite o primeiro número?"));

if (numUm % 2 === 0) {
    console.log(`O número é par ${numUm}`)
}else{
    console.log(`O número é impar ${numUm}`)
}

numDois = Number(prompt("Digite o segundo número?"));

if (numUm > numDois) {
    console.log(`Número um é maior que o dois: ${numUm}`)

}else if(numUm === numDois){
    console.log(`O número um ${numUm} é igual a o número dois ${numDois}`)
}else{
    console.log(`Número dois é maior que o número um: ${numDois}`)
}

idade = Number(prompt("Coloque a sua idade: "));

if (idade <= 12) {
    console.log("Criança")
}else if (idade > 12 && idade <= 17) {
    console.log("Adolecente")
}else if(idade >= 18 && idade <= 59){
    console.log("Adulto")
}else{
    console.log("Idoso")
}

numUm = Number(prompt("Digite um número: "));
let operacao = prompt("Digite uma operação lógica: ' + , - , * , / ' :  ");
numDois = Number(prompt("Digite o segundo número: "));

let resultado 

switch (operacao) {
    case "+":
        resultado = (numUm + numDois);
        console.log(`O resultado é ${resultado} da soma dos números ${numUm} e o ${numDois}`)
    break;

    case "-":
        resultado = (numUm - numDois);
        console.log(`O resultado é ${resultado} da subtração dos números ${numUm} e o ${numDois}`)
    break;

    case "*":
        resultado = (numUm * numDois);
        console.log(`O resultado é ${resultado} da multiplicação dos números ${numUm} e o ${numDois}`)
    break;

    case "/":
        resultado = (numUm / numDois);
        console.log(`O resultado é ${resultado} da divisão dos números ${numUm} e o ${numDois}`)
    break;    

    default:
        console.log("Esse objeto não faz parte das operações: ' +,-,*,/ ' ")
        break;
};

for (let i = 1; i < 100; i++) {
    if (i % 3 === 0) {
        console.log(i)
    };
};

function inverter(numero) {
    return String(numero)
    .split("")
    .reverse()
    .join("")
}

num  = prompt("Digite um número ");
let padrao = inverter(num);
console.log(padrao);
