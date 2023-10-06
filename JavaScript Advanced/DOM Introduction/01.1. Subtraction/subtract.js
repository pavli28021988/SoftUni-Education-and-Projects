function subtract() {
    //console.log('TODO:...');

    let firstNum = document.getElementById("firstNumber").value;

    let secondNum = document.getElementById("secondNumber").value;
    
    let res = Number(firstNum) - Number(secondNum);


    document.getElementById("result").textContent = res;
}