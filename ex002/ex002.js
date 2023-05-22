function enviarNome(){
  let nome = document.getElementById('nome')
  let res = document.getElementById('res')

  if(nome.value.length == 0){
    alert('Digite seu nome Por Favor!')
  } else {
    res.innerHTML = `Seja bem vindo(a) ${nome.value}`
  }
}