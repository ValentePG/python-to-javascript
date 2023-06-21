const resposta = document.querySelector('[data-resposta]');

const digito = Number(prompt('Digite um número inteiro'));

resposta.innerHTML = `<h1>O antecessor de ${digito} é ${digito - 1} e o sucessor é ${digito + 1}`