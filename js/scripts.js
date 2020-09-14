/* configuração do resumo expandido */
function resumoExpandido () {
  const tresPontos = document.querySelector('.ler-menos')
  const maisTexto = document.querySelector('.ler-mais')
  const toggleButton = document.querySelector('.toggle-ver-mais')

  if (tresPontos.style.display === 'none') {
    tresPontos.style.display = 'inline'
    maisTexto.style.display = 'none'
    toggleButton.style.fontWeight = 'bold'
    toggleButton.style.color = '#ED7839'
    toggleButton.innerHTML = 'ver mais'
  } else {
    tresPontos.style.display = 'none'
    maisTexto.style.display = 'inline'
    toggleButton.style.fontWeight = 'bold'
    toggleButton.style.color = '#ED7839'
    toggleButton.innerHTML = 'ver menos'
  }
}

function respostaExpandida () {
  const cardExpandido = document.querySelector('.card-expandido')

  console.log('a clicado')
  if (cardExpandido.style.display === 'none') {
    cardExpandido.style.display = 'inline'
  } else {
    cardExpandido.style.display = 'none'
  }
}
