import{
    translateEnglishToMorse,translateMorseToEnglish,autoTranslate
} from "../src/translator.js";

describe("Morse Translator", () => {
  test("English → Morse", () => {
    expect(translateEnglishToMorse("SOS"))
      .toBe("... --- ...");
  });

  test("Multiple words English → Morse", () => {
    expect(translateEnglishToMorse("HELLO WORLD"))
      .toBe(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
  });

  test("Morse → English", () => {
    expect(translateMorseToEnglish("... --- ..."))
      .toBe("SOS");
  });

  test("Auto translate English", () => {
    expect(autoTranslate("SOS"))
      .toBe("... --- ...");
  });

  test("Auto translate Morse", () => {
    expect(autoTranslate("... --- ..."))
      .toBe("SOS");
  });

  test("Throws error for invalid English", () => {
    expect(() => autoTranslate("HELLO!"))
      .toThrow("untranslatable");
  });

  test("Throws error for invalid Morse", () => {
    expect(() => autoTranslate("... --- ....-"))
      .toThrow("invalid Morse");
  });
});