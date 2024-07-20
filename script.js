//Main Menu Code -----------------------------------------------------------------------------------------------------

//Get heading from html
const heading = document.getElementById("title");
//Get main menu from html
const mainMenu = document.getElementById("mainMenu");
//Get PvE from html
const PvE = document.getElementById("PlayerVSComputer");
//Get Settinsg from html
const setting = document.getElementById("Settings");

//Create a function that hides menu and displays player vs computer
function playervscomputer(){
    heading.style.display = "none";
    mainMenu.style.display = "none";
    PvE.style.display = "flex";
}



//Player vs Computer Code --------------------------------------------------------------------------------------------

//Take user back to menu
function backToMenu(){
    PvE.style.display = "none";
    heading.style.display = "block";
    mainMenu.style.display = "flex";
    setting.style.display = "none";
}

//Game logic 

//Assign value to player's variables
var playerChoice = -1;
var playerScore = 0;
//Assign value to compputer's variable
var computerChoice = 0;
var computerScore = 0;
//Win status
var winStatus = "";
//IMG Source
const playerImg = document.getElementById("playerImg");
const computerImg = document.getElementById("computerImg");
//Score and Win status 
const winStatusHtml = document.getElementById("winStatus");
const scoreHtml = document.getElementById("score");


//Player Choses Rock
function choseRock(){
    playerImg.src = "images/hand-rock-icon.png";
    computerImg.src = "images/neutral-hand.png";
    playerImg.style.transform = "scaleX(1)";
    computerImg.style.transform = "scaleX(1)";
    winStatusHtml.innerText = "-------"
    playerChoice = 0;
}
//Player Choses Paper
function chosePaper(){
    playerImg.src = "images/paper-hand-icon.png";
    computerImg.src = "images/neutral-hand.png";
    playerImg.style.transform = "scaleX(1)";
    computerImg.style.transform = "scaleX(1)";
    winStatusHtml.innerText = "-------"
    playerChoice = 1;
}
//Player Choses Scissors
function choseScissors(){
    playerImg.src = "images/hand-scissors-icon.png";
    computerImg.src = "images/neutral-hand.png";
    playerImg.style.transform = "scaleX(1)";
    computerImg.style.transform = "scaleX(1)";
    winStatusHtml.innerText = "-------"
    playerChoice = 2;
}

//Play function
function play(){

    if (playerChoice == -1){
        return
    }

    //Assigning computer random number
    computerChoice = Math.floor(Math.random() * 3);


    //Change computer picture
    if (computerChoice == 0){
        computerImg.src = "images/hand-rock-icon.png";
        computerImg.style.transform = "scaleX(-1)";
    }
    else if (computerChoice == 1){
        computerImg.src = "images/paper-hand-icon.png";
        computerImg.style.transform = "scaleX(-1)";
    }
    else if (computerChoice == 2){
        computerImg.src = "images/hand-scissors-icon.png";
        computerImg.style.transform = "scaleX(-1)";
    }


    //Compare player and computer choices
    if (playerChoice === computerChoice){
        winStatus = "Draw";
    }
    else if ((playerChoice == 0 && computerChoice == 1) || (playerChoice == 1 && computerChoice == 2) || (playerChoice == 2 && computerChoice == 0)){
        computerScore = computerScore + 1;
        winStatus = "You Lose"
    }
    else if ((playerChoice == 1 && computerChoice == 0) || (playerChoice == 2 && computerChoice == 1) || (playerChoice == 0 && computerChoice == 2)){
        playerScore = playerScore + 1;
        winStatus = "You Win!";
    }
    // Change Score and Win Status
    winStatusHtml.innerText = winStatus;
    scoreHtml.innerText = playerScore + " - " + computerScore;

}

//Reset Function
function reset(){
    winStatusHtml.innerText = "-------";
    winStatus = "";
    playerScore = 0;
    computerScore = 0;
    playerChoice = -1;
    scoreHtml.innerText = playerScore + " - " + computerScore;
    computerImg.src = "images/neutral-hand.png";
    computerImg.style.transform = "scaleX(1)";
    playerImg.src = "images/neutral-hand.png";
    playerImg.style.transform = "scaleX(-1)";
}

//Settings ---------------------------------------------------------------------------------------------------------------------



//Settings Dispalyed
function settings(){
    mainMenu.style.display = "none";
    setting.style.display = "flex";
}

//Get all varibles
const background = document.querySelector("body");
const title = document.getElementById("title");
const chooseText = document.getElementById("chooseText");
const statscon = document.querySelector(".statsContainer");

//Set lightmode function
function lightMode(){
    background.classList.remove("darkMode");
    background.classList.add("lightMode");
    title.style.color = "#333333";
    chooseText.style.color = "#333333";
    statscon.style.color = "#333333";

}

function darkMode(){
    background.classList.remove("lightMode");
    background.classList.add("darkMode");
    title.style.color = "#D3D3D3";
    chooseText.style.color = "#D3D3D3";
    statscon.style.color = "#D3D3D3";

}
