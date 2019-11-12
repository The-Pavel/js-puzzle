// function to move a clicked cell; the function moveCell is passed as a callback to the event on line 37
const moveCell = (event) => {
  console.log(event.currentTarget)
  // calling the checkFunction to see if the currently clicked cell can move
  if (checkFunction(event)) {
    // 5. if it is: add empty class to clicked field
    event.currentTarget.classList.add("empty");
    // 6. Remove the empty class from previous field
    emptyCell.classList.remove("empty");
    // grabbing the number inside the currently clicked cell
    const updateNum = event.currentTarget.innerText;
    // updating the number inside the empty cell, which becomes a white cell
    emptyCell.innerText = updateNum;
    // deleting the number inside of the clicked cell, which becomes an empty cell
    event.currentTarget.innerText = "";
    // updating the variable emptyCell -> now the clicked cell becomes the empty cell
    emptyCell = event.currentTarget;
  }
};

// grabbing the hint button and hint message from the DOM
const hintButton = document.querySelector('#show-hint')
const hint = document.querySelector('.hint')

// adding event listener on the button to display the hint when clicked
hintButton.addEventListener('click', () => {
  hint.classList.toggle('active')
});

// 1. Queryselect the empty class
let emptyCell = document.querySelector(".empty");

// 3. Add an eventListener("click",...) with forEach on the nodeList of tds
const tdList = document.querySelectorAll("td");
tdList.forEach((element) => {
  // moveCell is a callback - a function that is triggered only when the event happens, that is why we don't add () after moveCell
  element.addEventListener("click", moveCell);
});
// function for checking if it is possible to move the cell
const checkFunction = (event) => {
// 1. position of emptyCell
// 3.
  const emptyCellIndex = emptyCell.cellIndex;
  const emptyRowIndex = emptyCell.parentNode.rowIndex;
// 2. position of current click
  const clickedCell = event.currentTarget;
  const clickedCellIndex = clickedCell.cellIndex;
  const clickedRowIndex = clickedCell.parentNode.rowIndex;

  // scenario.a(empty cell and clicked cell on the same row): current cell Index +1 or -1
  // scenario.b(empty cell and clicked cell in the same column): current row index +1 or -1
  const checkSameRow = clickedRowIndex === emptyRowIndex;
  const checkSameCol = clickedCellIndex === emptyCellIndex;
  const checkRowDif = Math.abs(emptyCellIndex - clickedCellIndex) === 1;
  const checkColDif = Math.abs(emptyRowIndex - clickedRowIndex) === 1;


  // returning true or false based on our combined conditions
  return (checkSameRow && checkRowDif) ||  (checkSameCol && checkColDif);

};




