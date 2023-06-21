const resposta = document.querySelector("[data-resposta]");
const digito = prompt('Digite algo');

resposta.innerHTML = `<h1>${typeof(digito)}</h1>`