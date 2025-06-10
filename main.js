// Obtém os links das habilidades pelo ID
var linkPass = document.getElementById("link_pass");
var linkQ = document.getElementById("link_q");
var linkW = document.getElementById("link_w");
var linkE = document.getElementById("link_e");
var linkR = document.getElementById("link_r");
// Obtenha o elemento de vídeo pelo ID
var videoHabilidade = document.getElementById("video_habilidade");

var descricaoHabilidade = document.getElementById("descricao_habilidade");

// Adiciona eventos de clique aos links das habilidades
linkPass.addEventListener("click", function() {
  // Altera a origem do vídeo para o vídeo da habilidade Passiva
  videoHabilidade.src = "./video/vid_passiva.webm";

  // Crie o parágrafo e defina o texto
  var paragrafo = document.createElement("p");
  var texto = `Sua passiva conta com duas partes. Na primeira, Vex é fortalecida de tempos em tempos com sua "Destruição", que faz com que suas habilidades básicas interrompam avanços e afastem seus inimigos. Já a segunda parte se chama "Escuridão", e cada vez que um adversário usa avanço ou teleporte, ele ganha uma marca. O ataque básico seguinte de Vex contra esse inimigo marcado irá causar dano adicional e diminuir o Tempo de Recarga da "Destruição".`;

  // Altere a cor da palavra "Vex"
  // Altere a cor da palavra "Vex" e "Habilidade"
var palavrasColoridas = ["Vex", "Sua passiva","Destruição","Escuridão"];
var cor = "#37224C";
var textoModificado = texto;

// Itere sobre as palavras coloridas e substitua-as pelo texto em negrito
for (var i = 0; i < palavrasColoridas.length; i++) {
  var palavraColorida = palavrasColoridas[i];
  textoModificado = textoModificado.replace(new RegExp(palavraColorida, "g"), `<strong>${palavraColorida}</strong>`);
}

// Defina o texto modificado como conteúdo do parágrafo
paragrafo.innerHTML = textoModificado;


  // Defina o texto modificado como conteúdo do parágrafo
  paragrafo.innerHTML = textoModificado;

  // Limpe o conteúdo anterior antes de adicionar o novo parágrafo
  descricaoHabilidade.innerHTML = "";
  descricaoHabilidade.appendChild(paragrafo);
});

linkQ.addEventListener("click", function() {
  // Altera a origem do vídeo para o vídeo da habilidade Q
  videoHabilidade.src = "./video/vid_hab_q.webm";

  // Crie o parágrafo e defina o texto
  var paragrafo = document.createElement("p");
  var texto = `Q – Rajada Mistral: Vex lança um projétil para frente, que diminui de tamanho e ganha velocidade antes do final do trajeto. É a habilidade que você vai priorizar na rota para poder farmar, pois possui um tempo de recarga baixo e um custo de mana reduzido.`;

  // Altere a cor da palavra "Vex"
  // Altere a cor da palavra "Vex" e "Habilidade"
var palavrasColoridas = ["Vex", "Q – Rajada Mistral:"];
var cor = "#37224C";
var textoModificado = texto;

// Itere sobre as palavras coloridas e substitua-as pelo texto em negrito
for (var i = 0; i < palavrasColoridas.length; i++) {
  var palavraColorida = palavrasColoridas[i];
  textoModificado = textoModificado.replace(new RegExp(palavraColorida, "g"), `<strong>${palavraColorida}</strong>`);
}

// Defina o texto modificado como conteúdo do parágrafo
paragrafo.innerHTML = textoModificado;


  // Defina o texto modificado como conteúdo do parágrafo
  paragrafo.innerHTML = textoModificado;

  // Limpe o conteúdo anterior antes de adicionar o novo parágrafo
  descricaoHabilidade.innerHTML = "";
  descricaoHabilidade.appendChild(paragrafo);
});

linkW.addEventListener("click", function() {
  // Altera a origem do vídeo para o vídeo da habilidade W
  videoHabilidade.src = "./video/vid_hab_w.webm";

  // Crie o parágrafo e defina o texto
  var paragrafo = document.createElement("p");
  var texto = `W – Espaço Pessoal: Vex recebe um Escudo e emite uma onda de choque que causa Dano Mágico aos inimigos ao redor. Espaço Pessoal detona a Escuridão em qualquer inimigo marcado que for atingido.`;

  // Altere a cor da palavra "Vex"
  // Altere a cor da palavra "Vex" e "Habilidade"
var palavrasColoridas = ["Vex", "W – Espaço Pessoal"];
var cor = "#37224C";
var textoModificado = texto;

// Itere sobre as palavras coloridas e substitua-as pelo texto em negrito
for (var i = 0; i < palavrasColoridas.length; i++) {
  var palavraColorida = palavrasColoridas[i];
  textoModificado = textoModificado.replace(new RegExp(palavraColorida, "g"), `<strong>${palavraColorida}</strong>`);
}

// Defina o texto modificado como conteúdo do parágrafo
paragrafo.innerHTML = textoModificado;


  // Defina o texto modificado como conteúdo do parágrafo
  paragrafo.innerHTML = textoModificado;

  // Limpe o conteúdo anterior antes de adicionar o novo parágrafo
  descricaoHabilidade.innerHTML = "";
  descricaoHabilidade.appendChild(paragrafo);
});

linkE.addEventListener("click", function() {
  // Altera a origem do vídeo para o vídeo da habilidade E
  videoHabilidade.src = "./video/vid_hab_e.webm";

  // Crie o parágrafo e defina o texto
  var paragrafo = document.createElement("p");
  var texto = `E – Penumbra Iminente: A sombra voa até um determinado local, aumentando de tamanho durante o trajeto. Ao chegar, causa Dano Mágico e Lentidão, além de marcar os inimigos atingidos com Escuridão.`;

  // Altere a cor da palavra "Vex"
  // Altere a cor da palavra "Vex" e "Habilidade"
var palavrasColoridas = ["Vex", "E – Penumbra Iminente:"];
var cor = "#37224C";
var textoModificado = texto;

// Itere sobre as palavras coloridas e substitua-as pelo texto em negrito
for (var i = 0; i < palavrasColoridas.length; i++) {
  var palavraColorida = palavrasColoridas[i];
  textoModificado = textoModificado.replace(new RegExp(palavraColorida, "g"), `<strong>${palavraColorida}</strong>`);
}

// Defina o texto modificado como conteúdo do parágrafo
paragrafo.innerHTML = textoModificado;


  // Defina o texto modificado como conteúdo do parágrafo
  paragrafo.innerHTML = textoModificado;

  // Limpe o conteúdo anterior antes de adicionar o novo parágrafo
  descricaoHabilidade.innerHTML = "";
  descricaoHabilidade.appendChild(paragrafo);
});

linkR.addEventListener("click", function() {
  // Altera a origem do vídeo para o vídeo da habilidade R
  videoHabilidade.src = "./video/vid_hab_r.webm";

  // Crie o parágrafo e defina o texto
  var paragrafo = document.createElement("p");
  var texto = `R – Onda Sombria: A sombra avança, marcando o primeiro campeão inimigo que for atingido e causando Dano Mágico a ele. Depois, Vex pode reconjurar essa habilidade para que a sombra a leve até o alvo marcado, causando Dano Mágico adicional. Se o alvo marcado morrer pouco tempo depois de sofrer dano de Onda Sombria, Vex pode conjurar a habilidade novamente em alguns segundos.`;

  // Altere a cor da palavra "Vex"
  // Altere a cor da palavra "Vex" e "Habilidade"
var palavrasColoridas = ["Vex", "R – Onda Sombria:"];
var cor = "#37224C";
var textoModificado = texto;

// Itere sobre as palavras coloridas e substitua-as pelo texto em negrito
for (var i = 0; i < palavrasColoridas.length; i++) {
  var palavraColorida = palavrasColoridas[i];
  textoModificado = textoModificado.replace(new RegExp(palavraColorida, "g"), `<strong>${palavraColorida}</strong>`);
}

// Defina o texto modificado como conteúdo do parágrafo
paragrafo.innerHTML = textoModificado;


  // Defina o texto modificado como conteúdo do parágrafo
  paragrafo.innerHTML = textoModificado;

  // Limpe o conteúdo anterior antes de adicionar o novo parágrafo
  descricaoHabilidade.innerHTML = "";
  descricaoHabilidade.appendChild(paragrafo);
});

// Adicione eventos de clique semelhantes aos outros links de habilidade
//ANTES DA TELA PRINCIPAL
window.addEventListener('load', function() {
  var loadingScreen = document.getElementById('loading-screen');
  var conteudo = document.getElementById('todo_conteudo');

  // Esconde a tela de carregamento após 2 segundos
  setTimeout(function() {
    loadingScreen.classList.add('hidden');
    conteudo.style.display = 'block';
  }, 2000);
});


//Player

