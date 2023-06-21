function enviarNome(){
  const nome = document.getElementById('nome')
  const res = document.getElementById('res')

  if(nome.value.length == 0){
    alert('Digite seu nome Por Favor!')
  } else {
    res.innerHTML = `Seja bem vindo(a) ${nome.value}`
  }
}