const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let size = 16;
let index = 0;

document.querySelector('#reset').addEventListener('click', resetBoard);

function resetBoard() {
  let boardSize = prompt('How big will the board be? Choose between 1 and 30');
  while (!Number.isInteger(Number(boardSize)) || Number(boardSize) > 31) {
    boardSize = prompt('How big will the board be?');
  }
  size = boardSize;
  document
    .querySelector('#board')
    .removeChild(document.querySelector('#board').firstChild);
  buildBoard();
}

function getColor() {
  return colors[index++ % colors.length];
}

function buildBoard() {
  let board = document.createElement('div');
  for (let i = 0; i < size; i++) {
    let row = document.createElement('div');
    row.className = 'row';
    for (let j = 0; j < size; j++) {
      let box = document.createElement('div');
      box.className = 'box';
      box.style.backgroundColor = 'black';
      box.addEventListener('mouseover', () => {
        console.log(this);
        let curColor = box.style.backgroundColor;
        let nextColor = getColor();
        while (nextColor === curColor) {
          nextColor = getColor();
        }
        box.style.backgroundColor = nextColor;
      });
      row.appendChild(box);
    }
    board.appendChild(row);
  }
  document.querySelector('#board').appendChild(board);
}

buildBoard();
