
const boardEle = document.querySelector('.js-board');
const createBoardButton = document.querySelector('.js-play-button');
const infoDisplay = document.querySelector('.infoDisplay');
let isCreate = false;

let board = ["", "", "", "", "", "", "", "", ""];
let go = "O";



function createBoard() {

  if (isCreate === false) {
    //use board array to loops values = inside array
    board.forEach((ties, index) => {

      //create new div = array.length (9, [""])
      tiesElement = document.createElement('div');

      //then add class="js-ties" to each div
      tiesElement.classList.add('js-ties');

      //use index as an ID for each ties
      tiesElement.id = index;

      //add addGo function by addEventListener
      tiesElement.addEventListener('click', addGo)

      //boardEle.append = shows how to create a list of tiesElement and append them to the inside of js-board element
      //short summary to tell taht all tiesElement is created inside js-board
      boardEle.append(tiesElement);

      //this line make js-play-button playgame text to 'reset'
      createBoardButton.innerText = 'reset !';

      //tells the player that O goes on the first move
      infoDisplay.textContent = "O Goes First";

      //to Check is tiesElemet is not yet created on js-board
      isCreate = true;

    });

  } else {
    //hide and clear board and change text inside js-play-button to 'play game!'
    createBoardButton.innerText = 'play game!';
    boardEle.innerHTML = '';
    infoDisplay.innerText = '';

    //to Check is tiesElemet is created on js-board
    isCreate = false;
  }
};

//onclick button to create board for tic tac toe
createBoardButton.addEventListener('click', () => {
  createBoard()
});


function addGo(event) {

  // create new div Element = goDisplay
  let goDisplay = document.createElement('div');

  //this line we use go to add a class to div (goDisplay) that is it gonna be X or O
  goDisplay.classList.add(go);

  //to create goDisplay in target element 
  event.target.append(goDisplay);

  /* for more clear it work like this 

    <div class="js-board board">
    //function createBoard()
      <div class="js-ties">

      //here is = goDisplay = document.createElement('div'); that create div below
        <div 

        //and here is what addGo function work
        //so first it start with O the function is goes like O then go = "O" return "X" then go = "X" and then it will return "O" on the next move
        class="go("X" or "O")"></div>

      </div>

    </div>

  */


  //if go = "O" then return "X" if false return "O"
  //this "X" and "O" is a class that we use to display inside tiesElement as a function in line 28
  go = go === "O" ? "X" : "O";

  //this line use to show the player that whom turn is now playing
  infoDisplay.textContent = "it is now " + go + "'s Go."

  //this line event.target is for choose where is our target element
  //that we need to add goDisplay (line 64,67) inside div that has created by createBoard()
  event.target.removeEventListener('click', addGo)

  checkScore();
}

function checkScore() {

  //here select all js-ties class
  const allties = document.querySelectorAll('.js-ties');
  console.log(allties);

  const winingCombo = [
    //columns
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    //rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    //Diagonal
    [0, 4, 8], [2, 4, 6]

  ]
  //winingCombo in each array above [0,1,2], [3,4,5], ...[2,4,6]
  winingCombo.forEach(array => {

    //for every each cell (let name it ties) in the array #id (0),(1),..(9)
    const OWins = array.every(ties =>

      //then for allties = every element that contains .js-ties  [ties] = each js-ties #id (0),(1),..(9)
      allties[ties]

        //if goDisplay has been add it gonna give .O to firstchild of .js-ties element
        //and if all firstchild that contains .O is match winningCombo O is winner
        .firstChild?.classList.contains("O"));

    //this code above run every time we do tiesElement.add EventListener('click', addGo) then it will check every js-ties is that match with winingCombo O is win

    if (OWins) {
      //display that O wins
      infoDisplay.textContent = "O Wins!"
      //here to stop the player to play or click on the board anymore
      allties.forEach(square => square.replaceWith(square.cloneNode(true)));
      return
    };

  });

  winingCombo.forEach(array => {
    const XWins = array.every(ties =>
      allties[ties].firstChild?.classList.contains("X"));

    if (XWins) {
      infoDisplay.textContent = "X Wins!"
      allties.forEach(square => square.replaceWith(square.cloneNode(true)));
      return
    }

  })
}

