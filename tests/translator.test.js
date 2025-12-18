const { getMorseForLetter, translateWord, translateSentence, translatemorseWord, translateMorseSentence, detectLanguage, autoTranslate } = require( "../translator");
describe ("Morse translator initial tests", () => {
    test("getMorseForLetter returns correct Morse for A", () => {
        expect(getMorseForLetter("A")) .toBe(".-");
    });
    test("translateWord converts HELLO to correct Morse", () => {
        expect(translateWord("HELLO")) .toBe(".... . .-.. .-.. ---");
    });
    test("translateSentence converts multiple words", () => {
        expect(translateSentence("HELLO WORLD")) .toBe(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
    });
    test("translateMorseSentence converts multiple words", () => {
        expect(translateMorseSentence(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")).toBe("HELLO WORLD");
    });
    test("autoTranslate converts morse to english", () => {
        expect(autoTranslate("... --- ...")).toBe("SOS");
    });
    test("autoTranslate converts morse to english", () => {
        expect(autoTranslate("SOS")).toBe("... --- ...");
    });

})