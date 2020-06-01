const functions= require("./script.js");
const pickRandomWord= functions.pickRandomWord;

// 1. Starten van de game d.m.v. het kiezen van het woord
test("When game starts a random word is picked", function() {
  const wordList = ["vis", "toeter", "developer"];
  expect(pickRandomWord(wordList)).not.toBe(null);
})