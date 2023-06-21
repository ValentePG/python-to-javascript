const resposta = document.querySelector("[data-resposta]");
const numero1 = Number(prompt('Digite um número'));
const numero2 = Number(prompt('Digite outro número'));
const resultado = numero1 + numero2;
resposta.innerHTML = `<h1>A soma de ${numero1} e ${numero2} é ${resultado}</h1>`