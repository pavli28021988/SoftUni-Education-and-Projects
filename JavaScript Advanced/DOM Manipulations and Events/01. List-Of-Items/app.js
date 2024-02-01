function addItem() {
   
   

    let textArea = document.getElementById('newItemText').value;
    let li = document.createElement('li');
    let text = document.createTextNode(textArea);// li.textContent = textArea;

    li.appendChild(text);
    document.getElementById('items').appendChild(li);

    //cleaning the input

    document.getElementById('newItemText').value = '';
    


}

/*function deleteItem(){
    let listChildren = list.getElementByTagName('li');

    if(listChildren.length == 0){
        return;
    }
    let last = listChildren[listChildren.length - 1];
    last.remove();//last.parentElement.removeChild(last);

}*/

/*
function solve(){
    let list = document.getElementById('newTextArea');

    let newItemValue = document.getElementById('newTextArea').value;

    let liItem = document.createElement('li');

    liItem.textContent = newItemValue;
    list.appendChild(liItem)

}


*/ 

