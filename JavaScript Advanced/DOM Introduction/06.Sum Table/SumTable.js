function sumTable() {

    let table = document.querySelectorAll("table tr");
    let total = 0;

    for(let i = 1; i < table.length;i++){
        let cols = table[i].children;
        let cost = cols[cols.length - 1].textContent;
        total += Number(cost)
    }

    document.getElementById('sum').textContent = total

}


/*
let tableRows =  document.querySelectorAll('table tr');
let sum = 0;


for(let i = 1;i < tableRow.length -1 ; i++){
    let columns = tableRows[i].children;

    sum += Number(columns[1].textContent)
}

document.getElementById('sum').textContent = sum;


*/ 

//------------------solution 2--------------------//
/*function sumTable() {
    let dataCells = Array.from(document.getElementsByTagName("td"))

    document.getElementById("sum").innerHTML = dataCells
        .slice(0, dataCells.length - 1)
        .reduce((a, v) => a + (Number(v.innerHTML) || 0), 0)
}*/