// Email checker
// - Make a list of emails
// - Ask the user for their email
// - Check if their email is listed
// - Output a message granting them access if the email is listed

const emailList= ["abc@email.com", "def@email.com", "123@email.com", "123456789@email.com"];
let userEmail = prompt(`To Play Dice Roller, please enter your email
 (test email: 123@email.com)`);


    for(let i = 0; i < emailList.length; i++){
        if (emailList[i] === userEmail){
            alert(`Welcome Back! You will now enter the game`);
            diceRoller();
            break;
        }

        else if (i === emailList.length - 1) {
            alert(`Email not correct, please refresh and enter again.`)
            
        }
    }

// Dice roller
// - Generate a random number from 1 to 6, for both the player and the computer
// - Determine the winner, based on who gets the highest score and let the user know
// - Make it a best of 5!

function diceRoller (){

let computerWin = 0
let playerWin = 0
let drawGame = 0

for(i = 0; i < 5; i++){

    let computerDice = Math.floor(Math.random() * 6) + 1;
    let playerDice = Math.floor(Math.random() * 6) + 1;
    alert(`
    Round ${i+1} of 5
    Your Dice is ${playerDice}`)

if(playerDice > computerDice){
    playerWin++

    alert(`
    You WIN this round!!
    ComputerDice is ${computerDice}
    
    You win ${playerWin} round(s), Computer win ${computerWin} round(s)
    `)
} 
else if (playerDice < computerDice){
    computerWin++

    alert(`
    You LOSS this round!!
    ComputerDice is ${computerDice}

    You win ${playerWin} round(s), Computer win ${computerWin} round(s)
    `)
}
else{
    drawGame++

    alert(`
    Oh! Result : DRAW
    ComputerDice is ${computerDice}
    
    You win ${playerWin} round(s), Computer win ${computerWin} round(s)`)
}

}

if(computerWin > playerWin){
    alert(`
    Game Ended
    Computer is the winner

    You win ${playerWin} round(s)
    Computer win ${computerWin} round(s)
    Draw ${drawGame} round(s)

    You can refresh the browser for another round.
    `)
}

if(playerWin > computerWin){

    alert(`
    Game Ended
    You are the winner!!! Wohoooo~

    You win ${playerWin} round(s)
    Computer win ${computerWin} round(s)
    Draw ${drawGame} round(s)

    You can refresh the browser for another round.
    `)

}

 if(playerWin === computerWin) {
    alert(`
    Game Ended
    Sorry No Winner~ This is a draw game

    You win ${playerWin} round(s)
    Computer win ${computerWin} round(s)
    Draw ${drawGame} round(s)

    You can refresh the browser for another round.
    `)
}

}