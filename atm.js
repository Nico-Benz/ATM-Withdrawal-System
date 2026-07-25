let balance = 500;


// dito is kung saan natin papaganahin ang system sa loob ng function
function process() {

    //where are finding the id in the index.html file 
    let amount = document.getElementById("withdrawalInput").value;

    // converting the value sa amount into float para detailed para kahit my decimal ma process
    amount = parseFloat(amount);

    // 
    const messageOuput = document.getElementById("messageOutput");

    //here is the procees if ang amount na imong eh withdraw is less tha equal sa balance succes but if exceed sa balance unsuccesful
    if(amount <= balance) {
        balance  = balance - amount;
        messageOuput.innerHTML = "withdraw succes!" + "<br>" + "Your balance is " + change;
       

    } else {
        messageOuput.textContent = "insufficient balance!"; 
    }

}