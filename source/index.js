
import{resetWord,render,resetLetterGuess} from "./views.js"


//on Page load,run reset to display the new hangman puzzle and the string value
resetWord();

//add event listener on our window to run getPuzzle with keydown
window.addEventListener("keydown",(e)=>{
  resetLetterGuess(e.key)
  render();
})

//add event listner to our reset button to reset puzzle
document.querySelector("#reset").addEventListener("click",(e)=>{
resetWord();
})
