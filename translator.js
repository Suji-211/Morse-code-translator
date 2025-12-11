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

//reverse morse to english

const MORSE_TO_ENGLISH = {};
for(const [letter,code] of Object.entries (MORSE_CODE)){
    MORSE_TO_ENGLISH[code]=letter;
}

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

// morse word to english

function translatemorseWord(morseWord){
    const codes = morseWord.split(" ").filter(Boolean);
    const letters = codes.map(code => MORSE_TO_ENGLISH[code] || "");
    return letters.join("");
}
// morse sentence to english

function translateMorseSentence(morsesentence){
    const trimmed = morsesentence.trim();
    if (trimmed === "") return "";
    const morseWords = trimmed.split(" / ");
    const englishWords = morseWords.map(translatemorseWord);
    return englishWords.join(" ");
}
// to find the input if its morse or english 

function detectLanguage(input) {
    const trimmed = input.trim();
    if (!trimmed) return "english";

    const pattern = /^[.\-\s\/]+$/;
    return pattern.test(trimmed) ? "morse" : "english";
}

function autoTranslate(input) {
    return detectLanguage(input) === "english"
        ? translateSentence(input)
        : translateMorseSentence(input);
}
 //window.getMorseForLetter = getMorseForLetter;
// window.translateWord = translateWord;
 window.translateSentence = translateSentence;
 window.translateMorseSentence= translateMorseSentence;
 window.autoTranslate = autoTranslate;