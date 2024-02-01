



/*function deleteByEmail(){
    let email = document.getElementsByName('email')[0].value.trim();

   
    let tableCells = document.querySelectorAll('#customers td:nth-child(2)')
   
    //let tableCells = document    //let tableCells = document.querySelectorAll('#customers td:nth-child(2)')

    //.getElementById('customers')
    //.getElementByTagName('td')

    let found = false;


    for(cell of tableCells){
        if(cell.textContent === email){
            cell.parentElement.remove();
            found = true;
        }
    }

    let result = document.getElementById('result');


    result.textContent  = found ? 'Deleted.' : 'Not found.'
}*/



function deleteByEmail(){


    let email = document.getElementsByName('email')[0].value;

    let secondColumn = document.querySelectorAll('#customers  tr td:nth-child(2)')

    for(el of secondColumn){

        if(el.textContent === email){
            el.parentElement.remove()//let row = el.parentNode; row.parentNode.removeChild(row);
            document.getElementById('result').textContent = "Deleted";

            return
        }

    }

    document.getElementById('result').textContent = 'Not Found'

    
}





