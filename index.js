// Email checker
// - Make a list of emails
// - Ask the user for their email
// - Check if their email is listed
// - Output a message granting them access if the email is listed

const emailList= ["abc@email.com", "def@email.com", "123@email.com", "123456789@email.com"]
let userEmail = prompt("Please enter your email")


    for (i = 0; i < emailList.length; i++){
        if(emailList[i] === userEmail){
            alert(`Your email is listed`);
            break;
        }

        if(i = emailList.length - 1){
            alert(`Your email is not on the list`)
        }
    }





// Dice roller
// - Generate a random number from 1 to 6, for both the player and the computer
// - Determine the winner, based on who gets the highest score and let the user know
// - Make it a best of 5!
