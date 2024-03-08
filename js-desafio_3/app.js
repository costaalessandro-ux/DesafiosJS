/*Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, 
a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.*/
function imc(altura, peso){
    return (peso / (altura * 2));
}
console.log(`O IMC do paciente é: `,imc(1.80, 100));


/*Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.*/
// IMPLEMENTAÇÃO ERRADA !
function calcFatorial(fatorial){
    for(let i = 1; i <= fatorial; i--){
        return fatorial * i;
    }
}
console.log(calcFatorial(5));


//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function perimetro(altura, largura){
    var perimetro = 2*(altura + largura);
    var area = altura * largura;
    console.log(`Aréa: ${area}`);
    console.log(`Perimetro: ${perimetro}`);
}
perimetro(3,400);


//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function perimetroCircular(raio){
 let perimetro = 2 * 3.14 * raio;
 let area = 3.14 * (Math.pow(raio,2));
 console.log(`Aréa circular: ${area}`);
 console.log(`Perimetro circular: ${perimetro}`);
}
perimetroCircular(100);


//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(numero){
    for(i = 1; i <= 10; i++){
        result = numero * i;
        console.log(`${numero} X ${i} = ${result}`);
    }
}
tabuada(2);