let size = 16;

function buildBoard() {
  let board = document.createElement('div');
  for (let i = 0; i < size; i++) {
    let row = document.createElement('div');
    row.className = 'row';
    for (let j = 0; j < size; j++) {
      let box = document.createElement('div');
      box.className = 'box';
      row.appendChild(box);
    }
    board.appendChild(row);
  }
  document.querySelector('#board').appendChild(board);
}

buildBoard();
