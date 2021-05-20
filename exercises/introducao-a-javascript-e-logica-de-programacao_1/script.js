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


