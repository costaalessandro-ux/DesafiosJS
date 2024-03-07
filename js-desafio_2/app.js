/* criando função para aparecer no console" */
function exibeNome(){
    console.log('Olá, mundo');
}
exibeNome();

function recebeNome(nome){
console.log(`Olá, ${nome}`);
}
recebeNome("Alessandro");

/*
let numero = 2;
function dobro(numero){
let resultado = numero * 2;
return console.log(`Resultado: ${resultado}`);
}
dobro(numero);
*/
function dobro(numero){
    return numero * 2;
    }
    console.log(dobro(400));

/*
let n1 = 5; let n2 = 3; let n3 = 8;
function media(n1, n2, n3){
let media = (n1+n2+n3)/3;
return console.log(`Resultado: ${media}`);
}
*/
function media(n1, n2, n3){
    return (n1+n2+n3)/3;
}
console.log(media(5,3,8));

/*
let num1 = 500, num2 = 220;
function compara(num1, num2){
if(num1 < num2){
    return console.log(`${num2} é MAIOR`);
}else{
    return console.log(`${num1} é MAIOR`);
}
}
*/
function compara(num1, num2){
    return num1 > num2 ? num1 : num2;
}
console.log(compara(500,220));

/*
let number = 500;
function multiplicaNum(number){
    let resultado = number * number;
    return console.log(`Resultado: ${resultado}`);
}
*/
function multiplicaNum(number){
    return number * number;
}
console.log(multiplicaNum(500));






