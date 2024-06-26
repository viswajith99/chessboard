
function createChessboard() {
  const board = document.getElementById('chessboard');
  let squares = '';
  let isWhite = true;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const color = isWhite ? 'white' : 'black';
      squares += `<div class="square ${color}">${String.fromCharCode(65 + j)}${8 - i}</div>`;
      isWhite = !isWhite;
    }
    isWhite = !isWhite;
  }

  board.innerHTML = squares;
}


createChessboard();
