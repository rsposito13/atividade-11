// Criando um novo elemento 
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
// Selecionando o elemento body
let elementoBody = document.body;
// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);

novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';

// Definindo o tamanho inicial da bola
let ballSize = 50;
let ball = document.createElement('div');

// Estilizando a bola
ball.style.width = ballSize + 'px';
ball.style.height = ballSize + 'px';
ball.style.borderRadius = '50%';
ball.style.backgroundColor = 'red';
ball.style.position = 'absolute';
ball.style.top = '0px';
ball.style.left = '0px';

// Adicionando a bola ao body
document.body.appendChild(ball);

// Variáveis para a movimentação da bola
let posX = 0;
let posY = 0;
let velX = 3;
let velY = 3;
let maxX = window.innerWidth - ballSize;
let maxY = window.innerHeight - ballSize;
let growthRate = 2; // Taxa de crescimento da bola
let maxBallSize = 300; // Tamanho máximo da bola antes de "estourar"

// Função para atualizar a posição e tamanho da bola
function moveBall() {
  posX += velX;
  posY += velY;

  // Verificar se a bola colide com as bordas e inverte a direção
  if (posX >= maxX || posX <= 0) {
    velX = -velX;
    growBall();
  }
  if (posY >= maxY || posY <= 0) {
    velY = -velY;
    growBall();
  }

  // Atualizar a posição da bola
  ball.style.left = posX + 'px';
  ball.style.top = posY + 'px';

  // Continuar a animação
  requestAnimationFrame(moveBall);
}

// Função para crescer a bola e verificar se ela estoura
function growBall() {
  ballSize += growthRate;
  ball.style.width = ballSize + 'px';
  ball.style.height = ballSize + 'px';

  // Atualizar os limites de movimento conforme a bola cresce
  maxX = window.innerWidth - ballSize;
  maxY = window.innerHeight - ballSize;

  // Se a bola atingir o tamanho máximo, ela "estoura" e volta ao tamanho inicial
  if (ballSize >= maxBallSize) {
    resetBall();
  }
}

// Função para resetar a bola ao tamanho inicial
function resetBall() {
  ballSize = 50; // Tamanho inicial da bola
  ball.style.width = ballSize + 'px';
  ball.style.height = ballSize + 'px';
  ball.style.backgroundColor = getRandomColor(); // Muda a cor quando "estoura"
  posX = 0;
  posY = 0;
  maxX = window.innerWidth - ballSize;
  maxY = window.innerHeight - ballSize;
}

// Função para gerar uma cor aleatória
function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Iniciar a animação
moveBall();
