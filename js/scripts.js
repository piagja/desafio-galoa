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

/* configuração de resposta expandida */

function respostaExpandida () {
  const cardExpandido = document.querySelector('.card-expandido')

  if (cardExpandido.style.display === 'none') {
    cardExpandido.style.display = 'inline'
  } else {
    cardExpandido.style.display = 'none'
  }
}

/* configuração de criar topico */

function showForm () {
  const criarTopicoForm = document.querySelector('.toggle-topico-discussoes')
  const discussoes = document.querySelector('.criar-topico-discussoes')

  if (criarTopicoForm.style.display !== 'none') {
    discussoes.style.display = 'none'
    criarTopicoForm.style.display = 'inline'
  }
}

/* configuração de tópico enviado */

function createdTopic () {
  const toggle = document.querySelector('.toggle-topico-discussoes')
  const feedback = document.querySelector('.topico-criado-wrapper')

  toggle.addEventListener('click', (event) => {
    event.preventDefault()
    if (toggle.style.display === 'inline') {
      toggle.style.display = 'none'
      feedback.style.display = 'inline'
      return false
    }
  })
}

/* configurar o botão de "criar novo tópico" para apenas dar refresh na página */

function reload () {
  window.location.reload()
}
