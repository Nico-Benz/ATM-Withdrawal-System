// Language: JavaScript
// Description: This program simulates a basic ATM withdrawal system.

let account_balance = 500;

// dito is kung saan natin papaganahin ang system sa loob ng function
function process() {

    //where are finding the id in the index.html file 
    let withdrawal_amount = document.getElementById("withdrawalInput").value;

    // converting the value sa amount into float para detailed para kahit my decimal ma process
    withdrawal_amount = parseFloat(withdrawal_amount);

    // hanapin ang message box sa index.html para malagyan ng output
    const messageOuput = document.getElementById("messageOutput");

    //here is the procees if ang amount na imong eh withdraw is less tha equal sa balance succes but if exceed sa balance unsuccesful
    if(withdrawal_amount <= account_balance) {
        account_balance = account_balance - withdrawal_amount;
        // nag gamit ako innerHTML than textContent kasi para gagana ang breakline ko
        messageOuput.innerHTML = "withdraw succes!" + "<br>" + "Your balance is " + account_balance;
       

    } else {
        messageOuput.textContent = "insufficient balance!"; 
    }

}