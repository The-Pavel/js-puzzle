// Select all pieces
const pieces = document.querySelectorAll('.piece');

// can move ?
function canMove(emtpyIndex, elementIndex) {
  if (emtpyIndex + 4 === elementIndex) { return true }
  if (emtpyIndex - 4 === elementIndex) { return true }
  if (![3,7,11,15].includes(emtpyIndex) && emtpyIndex + 1 === elementIndex) { return true }
  if (![0,4,8,12].includes(emtpyIndex) && emtpyIndex - 1 === elementIndex) { return true }
  return false
}

function move(element) {
  // Select empty place
  const emptyPlace = document.querySelector('.piece.empty');
  // Find index of the empty piece
  const emtpyIndex = Array.from(pieces).findIndex((e) => {
    return e === emptyPlace;
  });
  // Find index of current element
  const elementIndex = Array.from(pieces).findIndex((e) => {
    return e === element
  });
  // Check we can do this move
  if (canMove(emtpyIndex, elementIndex)) {
    // Copy content of selected piece on empty place
    emptyPlace.innerHTML = event.target.innerHTML;
    // Remove class empty on empty place
    emptyPlace.classList.remove('empty');
    // Delete content of selected piece
    event.target.innerHTML = '';
    // Add class empty to selected piece
    event.target.classList.add('empty');
  }

}

// Add an event listener on all pieces
pieces.forEach((piece) => {
  piece.addEventListener('click', (event) => {
    move(event.target);
  })
})
