let missing = 43;
let clicked = 0;
let timestamp;

let timeTrial = true;
let cheatUsed = false;
let paused = false;

let lastClicked = missing - 1;


function addSpan(l){
    return "<span>"+l.toUpperCase()+"</span>";
}
function formatForAnimation(s){
    return s.split("").map(addSpan).join("\n"); 
}
let lose = function(){
    alert("lo siento, has perdido");
    location.reload();
}
let gameModeTT = function(){
    timeTrial = true;
    document.getElementById("gameMode").innerHTML = "MODO CONTRARELOJ:"; 
    document.getElementById("timer").innerHTML = "04:00";

}
let gameModeWT = function(){
    timeTrial = false;
    document.getElementById("gameMode").innerHTML = "MODO ∞:"; 
    document.getElementById("timer").innerHTML = "VENGA TU PUEDES";
}
//hacer aqui
let numberLogic = function () {

    if (this.textContent == clicked + 1) {
        this.style.backgroundColor = "green";        
        clicked ++;
        missing --;

        document.getElementById("missing").innerHTML = missing;
        document.getElementById("clicked").innerHTML = clicked;
        document.getElementById("counter").innerHTML = clicked + "/100";
        
        if (clicked == 1 && timeTrial) {
           countdown(4);
        }    
        
    }
    else{
        alert("ESTA MAL");

        lose();
    }
    if (missing == 0){
        document.getElementById("felicidades").innerHTML = formatForAnimation("has ganao");
    }

}

let createNButton = function (n) {
    let button = document.createElement("button");
        
        button.classList.add("number");

        button.textContent = n.toString();

        button.addEventListener("click", numberLogic);

    return button;
}
let createNbuttonsRandom = function(n){
    let arr = [];

    for (let i = 1; i <= n; i++) {
        let button = createNButton(i);

        arr.push(button);
    }

    return shuffleArrayDurnstenfeld(arr);
}
let insertButtons = function(idName, n){
    let arr = createNbuttonsRandom(n);
    arr.forEach(button => {
            document.getElementById(idName).append(button);
    });
}
let cheat = function(){
    if (!cheatUsed){

        let buttons = document.querySelectorAll("button.number");
        let button;

        buttons.forEach(element => {
            if (element.innerHTML == clicked + 1) {
                button = element;
            }
        });

        button.classList.add("cheated");
        
        alert("¡Tramposo! Solo una trampa permitida");
        cheatUsed = true;
    }
}
let pause = function(){
    if (paused) {
        paused = false;
    }else{
        paused = true;
    }

}

/*
let test = createNbuttonsRandom(100);
*/
let idNameHTML = "numberContainer";
insertButtons(idNameHTML, missing);

// BOTONSITO

let buttonCreator = function (text, event) {
    let button = document.createElement("button");

    button.classList.add("number");
    button.textContent = text;
    button.addEventListener("click", event);

    return button;
}

// Trampita
let cheater = buttonCreator("Trampa", cheat);
document.getElementById("cheat").append(cheater);

// Pausa momento
let pauseB = buttonCreator("Pausa", pause)

document.getElementById("pause").append(pauseB);

let TrialMode = buttonCreator("Contrarreloj", gameModeTT);

document.getElementById("TTgm").append(TrialMode);

let WithoutMode = buttonCreator("Tiempo ∞", gameModeWT); 
document.getElementById("WTgm").append(WithoutMode);

