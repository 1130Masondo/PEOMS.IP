function display(response) {
    console.log("poem generatated");
    new typewrite("poem", {
        string:response.data.answer,
        autoStart: true,
        delay:1,
        cursor:"",
    }); 

}


function generatePoem(event){
event.preventfault();


let instructionInput = document.querySelector("#user-instructions");
let apikey="98094dff3b047c2d34bfcb2117otafd9";
let prompt="User instructions:Generatate a South African poem about ${instructionInput.value} shecodes AI' inside a <strong> element  at end of the poem and NOT at the beginning";
let context="You are a basic poem expert and you love  to write short peoms. Your goal is to genaratate a 3 line poem in basic HTML.Make sure you follow  the user-instruction below";
let apiURL="https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context={context}&key={key}"

let poemElement = document.querySelector("poem");
poemElement.style.display = "block";

console.log("Generatate poem");
console.log(`prompt:${prompt}`);
console.log(`Context:${context}`)

axios.get(apiURL).then(display);


}
let poemFormElement = document.querySelector("poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);