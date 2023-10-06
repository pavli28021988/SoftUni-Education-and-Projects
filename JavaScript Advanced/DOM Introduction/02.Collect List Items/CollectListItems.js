function extractText() {

    let selectedItems = document.querySelectorAll("ul#items li");

    let textArea = document.querySelector("#result");

    for(let el of selectedItems){
        textArea.value += el.textContent + "\n"
    }
    
}