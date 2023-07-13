const personagens = document.querySelectorAll('.personagem');


personagens.forEach((personagem) => {
  personagem.addEventListener('mouseenter', () => {

    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');

   personagem.classList.add('selecionado');

   const idPersonagem = personagem.attributes.id.value;
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    
    
    imagemPersonagemGrande.src = `./img/card-${idPersonagem}.png`;


    const nomePersonagem =  document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');

    const desricaoPersonagem = document.getElementById('descricao-personagem');
    desricaoPersonagem.innerText= personagem.getAttribute('data-description');
    
 

  })
})

