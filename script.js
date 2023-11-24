// login page handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transArea = document.getElementById("transaction-area");
    transArea.style.display = "block";
})

// transaction page event handler

const depositbtn = document.getElementById('addDeposit');
depositbtn.addEventListener('click', function(){
    const depositNumber = getInput('depositAmount');
    // const depositAmount = document.getElementById('depositAmount').value;
    // const depositNumber = parseFloat(depositAmount);

    addSpanText('currentDeposit', depositNumber);
    addSpanText('currentBalance', depositNumber);

    document.getElementById('depositAmount').value = "";
})

const withdrawbtn = document.getElementById('addWithdraw');
withdrawbtn.addEventListener('click', function(){
    const withdrawNumber = getInput('withdrawAmount');
    
    addSpanText('currentWithdraw', withdrawNumber);
    addSpanText('currentBalance', -1 * withdrawNumber);

    document.getElementById('withdrawAmount').value = "";
})

function getInput(id){
    const Amount = document.getElementById(id).value;
    const Number = parseFloat(Amount);
    return Number;
}


function addSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}