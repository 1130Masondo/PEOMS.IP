function generatePoem(event){
event.preventfault();

new typewrite("poem", {
    string:"Death be pround",
    autoStart: true,
    cursor:"",
}) 

}
let poemFormElement = document.querySelector("poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);