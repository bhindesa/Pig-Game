//State variable
const Player1 = {
    name : null,
    total : 0 ,
    activePlayer: false,
    playerChoice: "play"
};
const Player2 = {
    name: null,
    total: 0,
    activePlayer: false,
    playerChoice: "play"
};
let maxScore;
let dice ;
let playerTurn;

//DOM manipulation varibales
const player1Area = document.querySelector('#player1-details');
const player2Area = document.querySelector('#player2-details');
const player1Name = document.querySelector('#player1');
const player2Name = document.querySelector('#player2');
const maxScoreValue = document.querySelector('#maxScore');
const startBtn = document.querySelector('#startBtn');
const player1PlayBtn = document.querySelector('#player1PlayBtn');
const player1HoldBtn = document.querySelector('#player1HoldBtn');
const player2PlayBtn = document.querySelector('#player2PlayBtn');
const player2HoldBtn = document.querySelector('#player2HoldBtn');
const player1DisplayName = document.querySelector("#player1Name");
const player1Total = document.querySelector('#player1Total');
const player2DisplayName = document.querySelector("#player2Name");
const player2Total = document.querySelector('#player2Total');
const message = document.querySelector('#message');
const message2 = document.querySelector('#message2');
const resetGameBtn = document.querySelector('#reset-gameBtn');


//logic below
startBtn.addEventListener('click', init);

player1PlayBtn.addEventListener('click', player1PlayHandler);
player1HoldBtn.addEventListener('click', player1HoldHandler);

player2PlayBtn.addEventListener('click', player2PlayHandler);
player2HoldBtn.addEventListener('click', player2HoldHandler);

resetGameBtn.addEventListener('click', resetGameHandler);




function init(){
    Player1.name = player1Name.value;
    Player2.name = player2Name.value;
    dice = 0;
    maxScore = maxScoreValue.value;
    player1Total.innerText = `Total : 0`;
    player2Total.innerText = `Total : 0`;
    render();
}

function render(){

    player1DisplayName.innerText = player1Name.value.toUpperCase();
    player2DisplayName.innerText = player2Name.value.toUpperCase();
    playerTurn = Math.floor((Math.random() * 2) + 1);

    if (playerTurn === 1){
        Player1.activePlayer = true;
        player1Area.classList.toggle('active-area');
        message.innerText = `${Player1.name} is active and can proceed to play game!`;
    } 
    else {
        Player2.activePlayer = true;
        player2Area.classList.toggle('active-area');
        message.innerText = `${Player2.name} is active and can proceed to play game!`;
    }

}

function resetGameHandler(){
    player1Name.value = '';
    player2Name.value = '';
    dice = 0;
    maxScoreValue.value = 0;
    player1Total.innerText = `Total : 0`;
    player2Total.innerText = `Total : 0`;
    resetGameBtn.style.display = 'none';  
    render();


}

function player1PlayHandler(){
    if(Player1.activePlayer === true){
        if(Player1.total >= maxScore){
            message.innerText = `Hurray !! ${Player1.name} Wins!!`;
            message2.innerText = ``;
            Player1.activePlayer = false;
            Player2.activePlayer = false; 
            player1Area.style.backgroundColor = "grey";
            player2Area.style.backgroundColor = "grey";
            resetGameBtn.style.display = 'inline';     
            return;
        }
        else if(Player2.total >= maxScore){
            console.log(Player2.total);
            message.innerText = `Hurray !! ${Player2.name} Wins!!`;
            message2.innerText = ``;
            
            Player1.activePlayer = false;
            Player2.activePlayer = false;
            player1Area.style.backgroundColor = "grey";
            player2Area.style.backgroundColor = "grey";
            resetGameBtn.style.display = 'inline';     
            return;

        }
        else {
            dice = Math.floor((Math.random() * 6) + 1);
        }

        Player1.activePlayer = true;
        if(dice === 1){
            message.innerText = `Oops! Dice rolled ${dice} for ${Player1.name}`;
            Player1.activePlayer = false;
            Player1.total = 0;
            player1Total.innerText = `Total : ${Player1.total}`;
            Player2.activePlayer = true;
            player2Area.style.backgroundColor = "lightblue";
            player1Area.style.backgroundColor = "grey";
            message2.innerText = `${Player2.name} is active and can proceed to play game!`;
        } 
        else {
            message.innerText = `Dice rolled ${dice} for ${Player1.name}`;
            message2.innerText = ``;
            Player1.total += dice;
            player1Total.innerText = `Total : ${Player1.total}`;

        }
    } 
    else{
        message.innerText = 'You are not active player for now!!!!';
        message2.innerText = ``;

    }
}

function player1HoldHandler(){
    
    if(Player1.activePlayer === true){
        message.innerText = `${Player1.name} has score a total of ${Player1.total} for this round`;
      
        Player1.activePlayer = false;
        Player2.activePlayer = true;
        player2Area.style.backgroundColor = "lightblue";
        player1Area.style.backgroundColor = "grey";
        message2.innerText = `${Player2.name} is active and can proceed to play game!`;

    }
    else{
        message.innerText = 'You are not active player for now!!!!';
    }
}

function player2PlayHandler(){
    if(Player2.activePlayer === true){
        if(Player1.total >= maxScore){
            message.innerText = `Hurray !! ${Player1.name} Won!!`;
            message2.innerText = ``;
            Player1.activePlayer = false;
            Player2.activePlayer = false;    
            player1Area.style.backgroundColor = "grey";
            player2Area.style.backgroundColor = "grey";
            resetGameBtn.style.display = 'inline';     

            return;

        } 
        else if(Player2.total >= maxScore){
            message.innerText = `Hurray !! ${Player2.name} Won!!`;
            message2.innerText = ``;

            Player1.activePlayer = false;
            Player2.activePlayer = false;      
            player1Area.style.backgroundColor = "grey";
            player2Area.style.backgroundColor = "grey";
            resetGameBtn.style.display = 'inline';     
            return;

        } else {
            dice = Math.floor((Math.random() * 6) + 1);
        }
        if(dice === 1){
            message.innerText =`Oops! Dice rolled ${dice} for ${Player2.name}`;
            Player2.activePlayer = false;
            Player2.total = 0;
            player2Total.innerText = `Total : ${Player2.total}`;
            Player1.activePlayer = true;
            player1Area.style.backgroundColor = "lightblue";
            player2Area.style.backgroundColor = "grey";
            message2.innerText = `${Player1.name} is active and can proceed to play game!`;

        } 
        else {
            message.innerText = `Dice rolled ${dice} for ${Player2.name}`;
            message2.innerText = ``;

            Player2.total += dice;
            player2Total.innerText = `Total : ${Player2.total}`;   
        }
         
    }
    else{
        message.innerText = 'You are not active player for now!!!!'
        message2.innerText = ``;

    }
       
    
}

function player2HoldHandler(){
    if(Player2.activePlayer === true){
        message.innerText = `${Player2.name} has score a total of ${Player2.total} for this round`;
        Player2.activePlayer = false;
        Player1.activePlayer = true;
        player1Area.style.backgroundColor = "lightblue";
        player2Area.style.backgroundColor = "grey";
        message2.innerText = `${Player1.name} is active and can proceed to play game!`;
    }
    else{
        message.innerText = 'You are not active player for now!!!!';
        message2.innerText = ``;
    }
}
