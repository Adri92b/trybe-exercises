//Questão 1
 
let a= 1;
let b= 2;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.
 
let x= 4;
let y= 8; 

if(x>y) {
    console.log ("x é maior que y")
}else {
    console.log ("y é menor que x")
}

// Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let a= 1;
let b= 2;
let c= 3;

if(a>b && a>c) {
  console.log ("a é maior do que b e c")
}
else if(b>a && b>c) {
  console.log ("b é maior do que a e c")
}
else {
  console.log ("c é maior do que a e b")
}

// Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

let valor= 6

if(valor>1) {
  console.log ("positive");
}
else if(valor<1) {
  console.log ("negative");
}
else {
  console.log ("zero");
}


// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

let ladoDireito= 50;
let ladoEsquerdo= 50;
let ladoInferior= 80;