// select all the piece
const pieces = document.querySelectorAll('td');

// check if a piece have an empty neighbour
function haveEmptyNeighbour(piece, offsetX, offsetY) {
  const column = piece.cellIndex + 1;
  const row = piece.parentElement.rowIndex + 1;
  const neighbour = document.querySelector(`[data-column="${column + offsetX}"][data-row="${row + offsetY}"]`);
  if (neighbour) {
    return neighbour.classList.contains('empty');
  }
  return false
}

// Move the piece
function movePiece(element) {
  // select the empty place
  const emptyPlace = document.querySelector('.empty');
  emptyPlace.innerHTML = element.innerHTML;
  emptyPlace.classList.remove('empty');
  element.innerHTML = '';
  element.classList.add('empty');
}

function checkIfPlayerWin() {
  const piecesOrder = Array.from(document.querySelectorAll('td')).map(e => { return parseInt(e.innerHTML) })
  if (piecesOrder.join("1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,NaN")) {
    alert("You win!")
  }
}


// add event listerner on each pieces
pieces.forEach((piece) => {
  piece.addEventListener('click', () => {
    if (
      haveEmptyNeighbour(piece, -1, 0) ||
      haveEmptyNeighbour(piece, 1, 0) ||
      haveEmptyNeighbour(piece, 0, -1) ||
      haveEmptyNeighbour(piece, 0, 1)
    ) {
      movePiece(piece);
      checkIfPlayerWin();
    }
  })
})
