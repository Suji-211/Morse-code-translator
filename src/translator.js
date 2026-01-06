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

const MORSE_TO_ENGLISH = Object.entries(MORSE_CODE).reduce(
    (acc,[letter,code]) => {
        acc[code] = letter;
        return acc;
    },
    {}
);

// translate english to morse
export function translateEnglishToMorse(sentence){
    const words = sentence.trim().toUpperCase().split(/\s+/);
    return words.map(word => word.split("").map(letter => {
        if (!MORSE_CODE[letter]){
        throw new Error ("your input contains untranslatable characters");
    }
    return MORSE_CODE[letter];
})
.join(" ")
)
.join(" / ");
}

//translate morse to english
export function translateMorseToEnglish(sentence){
    const words = sentence.trim().split(" / ");
    return words .map(word => word .split(" ") .map(code => {
        if(!MORSE_TO_ENGLISH[code]){
            throw new Error ("your input contains invalid Morse code");
        }
        return MORSE_TO_ENGLISH[code];
    })
.join("")
)
.join(" ");
}

// to find the input if its morse or english 

export function detectLanguage(input) {
    const trimmed = input.trim();
    if (!trimmed) return "english";

    const pattern = /^[.\-\s\/]+$/;
    return pattern.test(trimmed) ? "morse" : "english";
}

export function autoTranslate(input) {
    const type = detectLanguage(input);
     return type=== "english"
        ? translateEnglishToMorse(input)
        : translateMorseToEnglish(input);
}


