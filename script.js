let username; // Variável para armazenar o nome de usuário
let randomLetter; // Variável para armazenar a letra sorteada

function startGame() {
  username = document.getElementById('username').value; // Obtém o nome de usuário do campo de entrada
  if (username.trim() === '') {
    alert('Por favor, digite um nome de usuário.'); // Alerta se o campo estiver vazio
    return;
  }
  // Esconde a tela de login e mostra a tela de sorteio de letra
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('letter-screen').style.display = 'block';
}

function drawLetter() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Alfabeto de A a Z
  randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)]; // Sorteia uma letra aleatória
  document.getElementById('letter-display').innerText = 'Letra sorteada: ' + randomLetter; // Exibe a letra sorteada
  // Mostra a tela de regras após sortear uma letra
  document.getElementById('rules-screen').style.display = 'block';
  document.getElementById('random-letter').innerText = 'Letra sorteada: ' + randomLetter; // Exibe a letra sorteada na tela de regras
}

function endGame() {
  alert('Fim de jogo'); // Mostra uma mensagem de fim de jogo
}
