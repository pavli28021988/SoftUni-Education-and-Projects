function calc() {
    // TODO: sum = num1 + num2


    let firstNumber = document.getElementById('num1').value
    let secondNumber =document.getElementById('num2').value

    let sum = Number(firstNumber) + Number(secondNumber);

    //document.getElementById('sum').textContent = `${sum}`

    document.getElementById('sum').value = sum;
}
