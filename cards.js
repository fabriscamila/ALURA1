async function carregarNoticias() {
  const response = await fetch('./data/noticias.json');
  const noticias = await response.json();
  const container = document.getElementById('cards-container');

  noticias.forEach(noticia => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-inner">
        <div class="front">
          <h3>${noticia.titulo}</h3>
          <p>${noticia.frente}</p>
        </div>
        <div class="back">
          <h4>${noticia.classificacao}</h4>
          <p>${noticia.verso}</p>
          <a href="${noticia.fonte}" target="_blank">Ver fonte</a>
        </div>
      </div>
    `;
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
    container.appendChild(card);
  });
}

carregarNoticias();