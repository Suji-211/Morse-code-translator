import { autoTranslate } from "./translator.js";
const inputE1 =document.querySelector("#input");
const outputE1 =document.querySelector("#output");
const errorE1 =document.querySelector("#error");
const buttonE1 =document.querySelector(".translator__button");

buttonE1.addEventListener("click", () => {
    errorE1.textContent = "";
    outputE1.textContent= "";

    try {
        const result = autoTranslate(inputE1.value);
        outputE1.textContent = result;
    }catch (err){
        errorE1.textContent= err.message;
    }
});