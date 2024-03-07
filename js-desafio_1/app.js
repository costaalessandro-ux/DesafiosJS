let h1 = document.querySelector('h1');
h1.innerHTML= "Hora do Desafio";

function consoleBotao() {
   console.log('O botão foi clicado!');
}

function alerta(){
    alert('Eu amo JS');
}

function inserir(){
    let cidade = prompt('Digite o nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você.`);
}

function soma(){
    let num1 = parseInt(prompt('Digite um número'));
    let num2 = parseInt(prompt('Digite outro número'));
    let soma = num1 + num2;
    alert(`Resultado da soma dos valores informados é: ${soma}`);
}