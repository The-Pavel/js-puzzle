// training
// select button
const button = document.getElementById('show-hint');
// put a mic on it listenning for a click
button.addEventListener('click', (event) => {
  // select hint div
  const hint = document.querySelector('.hint');
  // add class active to hint div
  hint.classList.add('active');
});


// puzzle solution
function canMove(tile) {
  const tileColumn = tile.cellIndex;
  const tileRow = tile.parentNode.rowIndex;
  const emptyTile = document.querySelector(".empty");
  const emptyTileColumn = emptyTile.cellIndex;
  const emptyTileRow = emptyTile.parentNode.rowIndex;
  const colDiff = tileColumn - emptyTileColumn;
  const rowDiff = tileRow - emptyTileRow;
  if ([-1, 1].includes(colDiff)) {
    return emptyTileRow === tileRow;
  } else if ([-1 , 1].includes(rowDiff)) {
    return emptyTileColumn === tileColumn;
  } else {
    return false;
  }
}

function checkIfPlayerWins() {
  // build an array of solution
  const solution = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,NaN];
  // select all tiles
  const tiles = document.querySelectorAll('td');
  const shot = [];
  tiles.forEach((tile)=>{
    // get each number of tile
    // build array of shot
    shot.push(Number.parseInt(tile.innerText,10));
  });
  // stringify arrays
  const solutionStr = solution.join(';');
  const shotStr = shot.join(';');
  // compare the 2 strings
  if(solutionStr === shotStr){
    // if equals display a nice message
    alert('You win! 👏');
  }
}

// select all tiles
const tiles = document.querySelectorAll('td');
// for each tile, put a mic listening to click
tiles.forEach((tile) => {
  tile.addEventListener('click', (event) => {
    //   check if tile can move
    if (canMove(tile)) {
      //  select empty tile
      const emptyTile = document.querySelector(".empty");
      //  get number of clicked tile
      const number = tile.innerText;
      //  add '.empty' class to clicked tile
      tile.classList.add('empty');
      //  remove '.empty' on empty tile
      emptyTile.classList.remove('empty');
      //  insert number into empty tile
      emptyTile.innerText = number;
      //  remove number from clicked tile
      tile.innerText = '';
      checkIfPlayerWins();
    }
  });
});


