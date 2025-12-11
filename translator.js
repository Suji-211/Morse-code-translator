// A to Z in Morse Code
const MORSE_CODE = {
   "A": ".-",
   "B": "-...",
   "C": "-.-.",
   "D": "-..",
   "E": ".",
   "F": "..-.",
   "G": "--.",
   "H": "....",
   "I": "..",
   "J": ".---",
   "K": "-.-",
   "L": ".-..",
   "M": "--",
   "N": "-.",
   "O": "---",
   "P": ".--.",
   "Q": "--.-",
   "R": ".-.",
   "S": "...",
   "T": "-",
   "U": "..-",
   "V": "...-",
   "W": ".--",
   "X": "-..-",
   "Y": "-.--",
   "Z": "--.."
};
// just translating one letter to morse
function getMorseForLetter(letter){
    const upper = letter.toUpperCase();
    return MORSE_CODE[upper] || "";
}
// translate a word to morse

function translateWord(word){
    const letters =word.split("");
    const morseletters =letters.map(getMorseForLetter);
    return morseletters.join(" ");
}

// translate the sentence into morse code

function translateSentence(sentence){
    const words = sentence.trim().split(/\s+/);
    const morseWords = words.map(translateWord);
    return morseWords.join(" / ");
}


 window.getMorseForLetter = getMorseForLetter;
 window.translateWord = translateWord;
 window.translateSentence = translateSentence;