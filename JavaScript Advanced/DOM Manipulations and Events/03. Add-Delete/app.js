function addItem() {
    let ul = document.getElementById('items');
    let input = document.getElementById('newItemText');
    let value = input.value;
    let li = document.createElement('li');
    li.textContent = value + ' ';

    let deleteBtn = document.createElement('a');
    deleteBtn.textContent = 'Delete';
    deleteBtn.style.color = 'red';

    deleteBtn.addEventListener('click', function(event){
        event.target.parentElement.remove();
    });

    li.appendChild(deleteBtn);

    ul.appendChild(li);
    //delete input field
    input.value = '';
}