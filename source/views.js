import getPuzzle from "./requests.js"
import HangmanGame from "./hangman.js";


const wordEl=document.querySelector("#word");
const remainingGuessesEl=document.querySelector("#remaining_guesses")
let word1;
let letterGuess;

//function:renders puzzle and string value to our screen
const render=()=>{
  //clear wordEl before displaying any elements to our screen, otherwise words will stack up
  wordEl.innerHTML="";
  //actually display our hangman guesses
  word1.solvePuzzle(letterGuess).split("").forEach((letter)=>{
    if(letter!==" "){
    const spanEl=document.createElement("span");
    spanEl.textContent=letter;
    //console.log(letter);
    spanEl.setAttribute("class","each-letter");
    document.querySelector("#word").appendChild(spanEl);
  }else{
    const spanSpace=document.createElement("span");
    spanSpace.innerHTML="&nbsp";
    spanSpace.setAttribute("class","space")
    document.querySelector("#word").appendChild(spanSpace);
  }
  })
  remainingGuessesEl.textContent=word1.getString();
  //console.log(word1.status);

}


//Async function:gets a new puzzle and renders that puzzle and string value to screen
const resetWord=async()=>{
  //gets a new puzzlxe
  const wordValue=await getPuzzle(2);
  //make word 1 that new puzzle value
  word1=new HangmanGame(wordValue,6);
  //let letterGuess="",so we just start with all * in our word initially
  letterGuess="";
  //renders puzzle to the screen
  render();
}

//we want to create a function to reassign the value of letterGuess because letterguess and word1 are both in global scope in this file,so this file uses
//the global values instead of adding them in as arguments(due to closures). When we get to our event listener
//on index.js,
//we want letterGuess to equal what e.key equals so we need a function in this file that changes
//the global value of letterGuess in this file
const resetLetterGuess=(key)=>{
  letterGuess=key
}




export{render,resetWord,resetLetterGuess}
