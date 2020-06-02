// Initialize ALL global variables here
// allTheWords = []
// This code here selects a random word
const wordList = [
  "vis",
  "toeter",
  "developer",
  "telefoon",
  "moeder",
  "snoer",
  "geeuw"
];
let maxAmount = 5;

// Random Word is Picked
let word;
const pickRandomWord = function(wordArray) {
  let randomIndex = Math.floor(Math.random() * wordArray.length);
  const randomWord = wordArray[randomIndex];
  console.log(randomWord);
  return randomWord;
};

//  Update inputArray
const updateInputArray = function (letter, inputArray) {
  inputArray.push(letter);
  console.log(inputArray);
  return inputArray;
}

//  Retracts guessed letters from word
let inputArray;
const wordGuessed = function (aRandomSplittedWord, inputArray) {
  let remaining = aRandomSplittedWord.filter(function (letter) {
    return !inputArray.includes(letter);

  });
  return remaining.length === 0;
};

//  Remove value of Input
const clearInputValue = function () {
  document.querySelector("input").value = "";
};

//  Game is Won
const winTheGame = function () {

  document.querySelector(".win").style.display = "block";
  gameOver = true;
};

//  Game is Lost
const loseTheGame = function () {
  document.querySelector(".lose").style.display = "block";
  gameOver = true;
};

//  Show random word in DOM
const showRandomWordInDom = function (randomWord) {
  document.querySelector(".lose p span").innerHTML = `${randomWord.join("")}`;
};

//  Show remaing amount of tries in DOM
const updateTriesDisplay = function (tries) {

  document.querySelector(".lives span").innerHTML = 5 - tries;
  return tries;
};

//  Show letters that are guessed incorrect in DOM
const lettersGuessedIncorrect = function (aRandomSplittedWord, inputArray) {
  let wrongLetters = inputArray.filter(function (letter) {
    return !aRandomSplittedWord.includes(letter);

  });
  document.querySelector(".guessed_letters").innerHTML = wrongLetters.join(" ");
};

//  Show letters guessed correctly
const lettersGuessedCorrect = function (aRandomSplittedWord, inputArray) {
  let wordDisplay = aRandomSplittedWord.map(function (letter) {
    if (inputArray.includes(letter)) {
      return letter;
    } else {
      return "_";
    }
  });

  document.querySelector(".the_word").innerHTML = wordDisplay.join(" ");
};

//  Guessing the correct word
const enterLetters = function () {
  if (gameOver) {
    return;
  }
  const guessedLetter = document.querySelector("input").value;
  clearInputValue();

  if (inputArray.includes(guessedLetter) || guessedLetter === "") {
    return;
  }

  if (!word.includes(guessedLetter)) {
    tries++;
    updateTriesDisplay(tries);
  }

  updateInputArray(guessedLetter, inputArray);
  lettersGuessedCorrect(word, inputArray);
  lettersGuessedIncorrect(word, inputArray);

  if (wordGuessed(word, inputArray)) {
    winTheGame();
  } else if (tries >= 5) {
    loseTheGame();
  }
};

function beginTheGame() {
  gameOver = false;
  document.querySelector(".win").style.display = "none";
  document.querySelector(".lose").style.display = "none";
  clearInputValue();

  word = pickRandomWord(wordList).split("");
  showRandomWordInDom(word);
  tries = 0;
  updateTriesDisplay(tries);

  inputArray = [];
  lettersGuessedCorrect(word, inputArray);
  lettersGuessedIncorrect(word, inputArray);
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".guess").addEventListener("click", enterLetters);

  document
    .querySelector(".restart")
    .addEventListener("click", beginTheGame);
  beginTheGame();
});

module.exports={pickRandomWord, lettersGuessedCorrect, updateTriesDisplay, updateInputArray, loseTheGame, winTheGame, }

