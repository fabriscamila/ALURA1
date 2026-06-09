async function carregarNoticias() {
  try {
    const response = await fetch('./data/noticias.json');
    
    if (!response.ok) {
      throw new Error(`Erro ao carregar notícias: ${response.status}`);
    }

    const noticias = await response.json();
    const container = document.getElementById('cards-container');

    if (!container) {
      console.error('Elemento #cards-container não encontrado no HTML.');
      return;
    }

    if (!noticias.length) {
      container.innerHTML = '<p>Nenhuma notícia encontrada.</p>';
      return;
    }

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
            <a href="${noticia.fonte}" target="_blank" rel="noopener noreferrer">Ver fonte</a>
          </div>
        </div>
      `;

      // Adiciona a interação de virar o cartão
      card.addEventListener('click', () => {
        card.classList.toggle('flipped');
      });

      container.appendChild(card);
    });
  } catch (error) {
    console.error('Falha ao carregar os cards:', error);
    const container = document.getElementById('cards-container');
    if (container) container.innerHTML = '<p>Erro ao carregar os cards.</p>';
  }
}

// Executa a função ao carregar o script
carregarNoticias();