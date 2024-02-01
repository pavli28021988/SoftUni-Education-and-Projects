function addItem() {
   
   
    let inputText = document.getElementById('newItemText');
    let inputValue = document.getElementById('newItemValue');
    let option = document.createElement('option');

    option.textContent =inputText.value;

    option.value = inputValue.value;

    let menu = document.getElementById('menu');
    menu = menu.append(option);

    inputText.value = ''; //clean input Text
    inputValue.value = '';//clean input Value

}

//--------------------------------------------//

/*
var select = document.getElementById("selectNumber");
var options = ["1", "2", "3", "4", "5"];

for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}

*/ //<select id="selectNumber">
    //<option>Choose a number</option>
    //</select>