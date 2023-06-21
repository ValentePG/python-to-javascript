const resposta = document.querySelector("[data-resposta]");

const digito = Number(prompt('Digite um número inteiro'));

resposta.innerHTML = `<h1>O dobro de ${digito} é ${digito * 2}, o triplo é ${digito * 3}.</h1>`